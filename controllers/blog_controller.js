const { Blog } = require('../models');

module.exports ={
	async createBlog (req, res) {
		await Blog.create({
			...req.body,
			UserId: req.session.user_id,
		});

		res.redirect('/dashboard');
	}
}