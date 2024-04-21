const fs = require('fs');
const User = require('../database/models/user');
const { generateUsers } = require('./user');
const userUtils = require('../utils/user');

const seedUsers = async (num, role, name, result) => {
    return new Promise((resolve) => {
        const users = generateUsers(num, role);

        if (result?.[name]) return true;

        User.insertMany(users, { ordered: false })
            .then((docs) => {
                console.log(
                    `${docs.length} "${name}" records have been inserted into the database.`
                );
                return resolve(true);
            })
            .catch((err) => {
                console.error(err);
                console.error(
                    `${err.writeErrors?.length ?? 0
                    } errors occurred during the insertMany operation.`
                );
                return resolve(false);
            });
    });
};

const seedDB = () => {
    fs.readFile('seed/seed.json', async function (err, content) {
        if (err) throw err;

        let result = JSON.parse(content) || {};

        let [user] = await Promise.all([
            seedUsers(15, userUtils.roles.USER, 'user', result),
        ]);

        fs.writeFile(
            'seed/seed.json',
            JSON.stringify({
                ...result,
                user,
            }),
            function (err) {
                if (err) throw err;
            }
        );
    });
};

module.exports = seedDB;
