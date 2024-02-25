const bcrypt = require('bcrypt')
const UserModel = require('../models/userModel')

class UserService {
	async userByLogin(login) {
		try {
			return  await UserModel.findOne({ login }).exec()
		} catch (e) {
			console.log(e)
		}
	}

	async createUser(name, login, password) {
		try {
			const hashPassword = await bcrypt.hash(password, 7)
			return  await UserModel.create({name, login, password: hashPassword})
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new UserService()
