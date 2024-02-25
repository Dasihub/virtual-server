const UserService = require('../services/UserService')

class UserController {
	async registration(req, res) {
		try {
			const { name, email, password } = req.body

			const user = await UserService.userByEmail(email)
		} catch (e) {
			res.status(500).json({
				data: [],
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}
}

module.exports = new UserController()
