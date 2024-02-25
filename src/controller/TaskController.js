const TaskService = require('../services/TaskService')

class TaskController {
	async getAllTasks(req, res) {
		try {
			const { userId } = req.params

			const data = await TaskService.selectAllTask(userId)

			res.json({
				data,
				message: 'Данные успешно получены',
				type: 'success'
			})
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: [],
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async createTask(req, res) {
		try {
			const { userId, title, description } = req.body

			const data = await TaskService.createTask(userId, title, description)

			if (data) {
				return res.status(201).json({
					data
				})
			}

			res.status(400).json({
				data: {}
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

	async updateTask(req, res) {
		try {
			const { taskId, title, description, completed } = req.body

			const data = await TaskService.updateTask(taskId, title, description, completed)

			if (data) {
				return res.status(204).json()
			}

			res.status(400).json()
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: {},
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async deleteTask(req, res) {
		try {
			const { taskId } = req.params

			const data = await TaskService.deleteTask(taskId)

			if (data) {
				return res.status(204).json()
			}

			res.status(400).json()
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: {},
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}

	async updateCompleted(req, res) {
		try {
			const { taskId } = req.params
			const { completed } = req.query

			const data = await TaskService.updateCompleted(taskId, completed)

			if (data) {
				return res.status(204).json()
			}

			res.status(400).json()
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

module.exports = new TaskController()
