const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

//Post a Blog 
router.post('/blog', blog_controller.createBlog);

//Edit a Blog
router.put('/blog/:postId', blog_controller.editBlogPost);

//Delete a Blog
router.delete('/blog/:postId', blog_controller.deleteBlogPost);

//Add Comment
router.post('/comment/:postId', blog_controller.addComment);

module.exports = router;