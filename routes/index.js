const express = require('express');
const user = require('./user');
const image = require('./image');
const auth = require('./auth');

const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/images', image);

module.exports = router;
