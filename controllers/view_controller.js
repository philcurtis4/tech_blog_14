const {User} = require('../models');


module.exports = {
	showHomePage (req, res) {
		res.render('homepage', {
			title: 'Tech Blog - Homepage'
		});
	},

	showRegisterPage (req, res) {
		res.render('register', {
			title: 'Tech Blog - Register',
			register: true,
		})
	},

	async showDashboardPage (req, res) {
		const user = await User.findByPk(req.session.user_id, {
			attributes: ['email', 'username']
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
	}


}