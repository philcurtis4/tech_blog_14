


module.exports = {
	showHomePage (req, res) {
		res.render('homepage', {
			title: 'Tech Blog - Homepage'
		});
	},

	showRegisterPage (req, res) {
		res.render('register', {
			title: 'Tech Blog - Register'
		})
	}


}