const { DataTypes } = require('sequelize');
const {hash, compare} = require('bcrypt');

const client = require('../config/connection');

const User = client.define('User', {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
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

	hooks: {
		async beforeCreate(user) {
			user.password = await hash(user.password, 10);
		}
	}

});

User.prototype.validatePassword = async function (formPassword) {
	const is_valid = await compare(formPassword, this.password);

	return is_valid;
}

module.exports = User;
