const router = require('express').Router();
const view_controller = require('../controllers/view_controller');

//Homepage Route
router.get('/', view_controller.showHomePage);

//Register Route
router.get('/register', view_controller.showRegisterPage);

module.exports = router;