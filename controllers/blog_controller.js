const { Blog } = require('../models');

module.exports ={
	async createBlog (req, res) {
		await Blog.create({
			...req.body,
			UserId: req.session.user_id,
		});

		res.redirect('/dashboard');
	},

	async editBlogPost (req, res) {
		try {
			//get the id of the post
			const postId = req.params.postId
			

			//get the post using the post id
			const post = await Blog.findByPk(postId);
			
			//get the updated info
			const updatedPost = req.body

			//update the post
			await post.update(updatedPost);

			//redirect back to dashboard
			res.redirect('/dashboard');

			} catch (error) {
			console.error(error);
        //redirect to a page watch video about session errors
		}
	},

	async deleteBlogPost (req, res) {
		const postId = req.params.postId

		await Blog.destroy({
			where: {
				id: postId
			}
		});

		res.redirect('/dashboard');

	}
}