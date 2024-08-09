const router = require('express').Router();
const view_controller = require('../controllers/view_controller');

const { redirectGuest, redirectUser } = require('./helpers/');

//Homepage Route
router.get('/', redirectUser, view_controller.showHomePage);

//Register Route
router.get('/register', redirectUser, view_controller.showRegisterPage);

//Log In Route
router.get('/login', redirectUser, view_controller.showLoginPage);

//Dashboard route
router.get('/dashboard', redirectGuest, view_controller.showDashboardPage);

module.exports = router;