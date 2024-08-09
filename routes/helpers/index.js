module.exports = {
	redirectGuest (req, res, next) {
		//if no session cookie take back to login
		if(!req.session.user_id) {
			return res.redirect('/login');
		}

		next();
	},

	redirectUser (req, res, next) {
		if(req.session.user_id) {
			return res.redirect('/dashboard');
		}

		next();
	}
}