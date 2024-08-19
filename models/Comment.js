const { DataTypes } = require('sequelize');

const client = require('../config/connection');

const Comment = client.define('Comment', {
	username: {
		type: DataTypes.STRING,
	},
	BlogId: {
		type: DataTypes.INTEGER,
	},
	comment: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	
});

module.exports = Comment;