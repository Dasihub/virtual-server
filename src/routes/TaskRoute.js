const { Router } = require('express')
const TaskController = require('../controller/TaskController')

const router = Router()

router.get('/:userId', TaskController.getAllTasks)
router.post('/', TaskController.createTask)
router.put('/', TaskController.updateTask)
router.delete('/:taskId', TaskController.deleteTask)

module.exports = router
