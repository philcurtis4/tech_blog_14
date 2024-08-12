const {User, Blog} = require('../models');


module.exports = {
	async showHomePage (req, res) {
		try {
			const allBlogPosts = await Blog.findAll({
				include: User, // Include the User model to get author information
        order: [['createdAt', 'DESC']], // Order the posts by creation date
				raw: true
		});

		 
		res.render('homepage', {
			blogPosts: allBlogPosts,
			title: 'Tech Blog - Homepage'
		});
			
		} catch (error) {
			console.log(error);
		}
	},

	showRegisterPage (req, res) {
		res.render('register', {
			title: 'Tech Blog - Register',
			register: true,
		})
	},

	async showDashboardPage (req, res) {
		const user = await User.findByPk(req.session.user_id, {
			attributes: ['email', 'username'],
			include: Blog
		})

		res.render('dashboard', {
			title: 'Tech Blog - Dashbaord',
			user: user.get({plain: true}),
		})
	},

	showLoginPage (req, res) {
		res.render('login', {
			title: 'Tech Blog - Log In',
			login: true,
		})
	},

	showBlogPostPage (req, res) {
		res.render('createBlog', {
			title: 'Tech Blog - Create Post'
		})
	}


}