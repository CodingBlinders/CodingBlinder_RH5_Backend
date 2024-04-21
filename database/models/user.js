const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: true,
            enum: ['USER', 'ADMIN'],
            default: 'USER'
        },
        heartDisease: {
            RFHYPE5: String,
            TOLDHI2: String,
            CHOLCHK: String,
            BMI5: String,
            SMOKE100: String,
            CVDSTRK3: String,
            DIABETE3: String,
            TOTINDA: String,
            FRTLT1: String,
            VEGLT1: String,
            RFDRHV5: String,
            HLTHPLN1: String,
            MEDCOST: String,
            GENHLTH: String,
            MENTHLTH: String,
            PHYSHLTH: String,
            DIFFWALK: String,
            SEX: String,
            AGEG5YR: String,
            EDUCA: String,
            INCOME2: String
        }
    },
    { timestamps: true }
);

const User = mongoose.model('users', userSchema);
module.exports = User;
