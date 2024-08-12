const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

//Post a Blog 
router.post('/blog', blog_controller.createBlog);

module.exports = router;