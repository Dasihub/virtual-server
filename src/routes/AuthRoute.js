const { Router } = require('express')
const AuthController = require('../controller/UserController')

const router = Router()

router.post('/registration', AuthController.registration)
router.post('/auth', AuthController.auth)
router.get('/check-auth', AuthController.checkAuth)

module.exports = router
