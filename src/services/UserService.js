const UserModel = require('../models/userModel')

class UserService {
	async userByEmail(email) {
		try {
			const user = UserModel.findOne({ email })
			console.log(user)
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = UserService
