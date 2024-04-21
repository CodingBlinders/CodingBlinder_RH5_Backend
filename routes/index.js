const express = require('express');
const user = require('./user');
const image = require('./image');
const auth = require('./auth');
const heatmap = require('./heatmap');

const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/images', image);
router.use('/heatmap', heatmap);

module.exports = router;
