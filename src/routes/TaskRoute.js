const { Router } = require('express')
const TaskController = require('../controller/TaskController')

const router = Router()

router.get('/:userId', TaskController.getAllTasks)
router.delete('/:taskId', TaskController.deleteTask)
router.patch('/:taskId', TaskController.updateCompleted)
router.post('/', TaskController.createTask)
router.put('/', TaskController.updateTask)

module.exports = router
