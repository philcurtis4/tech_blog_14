const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

//Post a Blog 
router.post('/blog', blog_controller.createBlog);

//Edit a Blog
router.put('/blog/:postId', blog_controller.editBlogPost);

//Delete a Blog
router.delete('/blog/:postId', blog_controller.deleteBlogPost);

module.exports = router;