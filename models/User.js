const { DataTypes } = require('sequelize');
const client = require('../config/connection');

const User = client.define('User', {
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: 6
		}
	}
}, {

});

modules.exports = User;
