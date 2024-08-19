const {User, Blog, Comment} = require('../models');


module.exports = {
	async showHomePage (req, res) {
		try {
			const user = await User.findByPk(req.session.user_id)
			const allBlogPosts = await Blog.findAll({
				include: [User, {
					model:  Comment,
					order: [['createdAt', 'DESC']],
				}], // Include the User model to get author information
        order: [['createdAt', 'DESC']], // Order the posts by creation date
				
		});

		 console.log(allBlogPosts.map((blogObj) => blogObj.get({plain: true}).Comments))
		res.render('homepage', {
			user: user ? user.get({plain: true}) : false,
			blogPosts: allBlogPosts.map((blogObj) => blogObj.get({plain: true})),
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
	},

	async showEditBlogPost (req, res) {
		try {
			//get the id of the post
			const postId = req.params.postId
			

			//get the post using the post id
			const post = await Blog.findByPk(postId);
			
			const postData = post.get({ plain: true });
			

			//render edit page with the post info
			res.render('editPost', { post: postData });
			// res.json({
			// 	message: 'it worked'
			// })
		} catch (error) {
			console.error(error);
        //redirect to a page watch video about session errors
		}

	},

	async showSingleBlogPost (req, res) {

		res.render('post');
	}


}