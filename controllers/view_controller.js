module.exports = {
	showHomePage (req, res) {
		res.render('homepage', {
			title: 'Tech Blog - Homepage'
		});
	}
}