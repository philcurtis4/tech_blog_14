const router = require('express').Router();
const user_controller = require('../controllers/user_controller');

//Route for Register User
router.post('/register', user_controller.registerUser);

//Route for User Login
router.post('/login', user_controller.loginUser);

module.exports = router;