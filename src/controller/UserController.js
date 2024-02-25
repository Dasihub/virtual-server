const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserService = require('../services/UserService')

class UserController {
	async registration(req, res) {
		try {
			const { name, login, password } = req.body

			const user = await UserService.userByLogin(login)

			if (user) {
				return res.status(300).json({
					data: false,
					message: `Пользователь с такой логином ${login} уже существует`,
					type: 'warning'
				})
			}

			const data = await UserService.createUser(name, login, password)

			if (data) {
				return res.status(201).json({
					data: true,
					message: 'Регистрация прошла успешно',
					type: 'success'
				})
			}

			return res.status(300).json({
				data: false,
				message: 'Не удалось пройти регистрацию',
				type: 'warning'
			})
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: false,
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async auth(req, res) {
		try {
			const body = req.body

			const user = await UserService.userByLogin(body.login)

			if (!user) {
				return res.status(300).json({
					data: false,
					message: 'Неправильный логин или пароль',
					type: 'warning'
				})
			}

			const isPassword = await bcrypt.compare(body.password, user.password)

			if (!isPassword) {
				return res.status(300).json({
					data: false,
					message: 'Неправильный логин или пароль',
					type: 'warning'
				})
			}

			const { _id, login, name, __v } = user

			const token = jwt.sign({ _id, login, name, __v }, process.env.JWT_TOKEN)

			res.status(203)
				.cookie('token', token, { httpOnly: true, maxAge: 100 * 60 * 60 * 60 * 24 * 31 })
				.json({
					data: { _id, login, name, __v },
					message: 'Авторизация прошла успешно',
					type: 'success'
				})
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: {},
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async checkAuth(req, res) {
		try {
			const { token } = req.cookies
			if (!token) {
				return res.json({
					data: false,
					message: 'Пользователь не авторизован',
					type: 'success'
				})
			}

			const { _id, login, name, __v } = jwt.verify(token, process.env.JWT_TOKEN)

			if (_id && login && name) {
				return res.status(203).json({
					data: {
						_id,
						login,
						name,
						__v
					},
					message: 'Пользователь авторизован',
					type: 'success'
				})
			}
			res.json({
				data: false,
				message: 'Пользователь не авторизован',
				type: 'success'
			})
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: {},
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async logout(req, res) {
		try {
			res.clearCookie('token').json({
				data: {},
				type: 'success',
				message: 'Вы успешно вышли из аккаунта!'
			})
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: {},
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}
}

module.exports = new UserController()
