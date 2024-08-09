const { User } = require('../models');

module.exports = {
	async registerUser(req, res) {
		try {
			const user = await User.create(req.body);

			req.session.user_id = user.id

			res.redirect('/dashboard');
		} catch (error) {
			console.log(error);
			res.redirect('/register')
		}
	},

	async loginUser(req, res) {

	},

	async logoutUser (req, res) {
		req.session.destroy();

		res.redirect('/');
	}
};

