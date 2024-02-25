const jwt = require('jsonwebtoken')

const authGuard = (req, res, next) => {
	const { token } = req.cookies
	if (!token) {
		return res.status(401).json({
			data: false,
			message: 'Вы не авторизованы',
			type: 'error'
		})
	}

	const { _id, login, name } = jwt.verify(token, process.env.JWT_TOKEN)

	if (_id && login && name) {
		return next()
	}

	return res.status(401).json({
		data: false,
		message: 'Вы не авторизованы',
		type: 'error'
	})
}

module.exports = authGuard
