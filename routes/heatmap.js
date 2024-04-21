const express = require('express');
const heatmap = require('../app/heatmap');
const auth = require('../auth');

const router = express.Router();

router.get('/all', heatmap.all);
router.get('/:id', heatmap.get);
router.post('/create', auth.verifyToken, heatmap.create);
// router.post('/create', heatmap.create);
router.patch('/update/:id', auth.verifyToken, heatmap.update);
router.delete('/remove/:id', auth.verifyToken, heatmap.remove);

module.exports = router;