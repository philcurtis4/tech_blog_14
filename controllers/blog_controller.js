const { Blog, Comment, User } = require('../models');


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

	async addComment (req, res) {
		//grab post id
		const postId = req.params.postId;
		//grab comment
		const comment = req.body.comment;
		const userId =  req.session.user_id;
		// console.log(req.body)
		const user = await User.findByPk(userId);
		
		console.log(user.username)
		await Comment.create({
			BlogId: postId,
			comment: comment,
			username: user.username,
		});
		
		res.redirect('/');

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