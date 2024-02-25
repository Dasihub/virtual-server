const { Router } = require('express')
const TaskController = require('../controller/TaskController')

const router = Router()

router.get('/:userId', TaskController)

module.exports = router
