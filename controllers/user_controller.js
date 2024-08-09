const { User } = require('../models');

module.exports = {
	async registerUser(req, res) {
		try {
			const user = await User.create(req.body);

			
		} catch (error) {
			console.log(error);
			res.redirect('/register')
		}
	},

	async loginUser(req, res) {

	}
};

