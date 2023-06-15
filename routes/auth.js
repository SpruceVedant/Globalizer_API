const router = require("express").Router();

const authController = require('../controllers/user');
const verifyToken  = require("../controllers/verifyToken");

router.post('/auth', authController.authorize);

router.post('/signup', authController.signup);

router.post('/user/logout', verifyToken.RemoveToken);

router.get('/users/:id/verify/:token', authController.verifyEmail);

module.exports = router;
