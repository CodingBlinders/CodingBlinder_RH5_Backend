const express = require('express');
const user = require('../app/user');
const auth = require('../auth');

const router = express.Router();

router.get('/all', auth.verifyToken, auth.isAdmin, user.all);
router.get('/:id', user.get);
router.patch('/update/:id', auth.verifyToken, user.update);
router.patch('/update/password/:id', auth.verifyToken, user.change_password);
router.delete('/remove/:id', auth.verifyToken, user.remove);

//heart desease
router.post('/heartdisease/:id', user.heartDisease);
router.get('/heartdisease/:id', user.getHeartDisease);

//diabetes
router.post('/diabetes/:id', user.diabetes);
router.get('/diabetes/:id', user.getDiabetes);

module.exports = router;
