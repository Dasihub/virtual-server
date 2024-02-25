const TaskModel = require('../models/taskModel')

class TaskService {
	async selectAllTask(userId) {
		try {
			return await TaskModel.find({ userId })
		} catch (e) {
			console.log(e)
		}
	}

	async createTask(userId, title, description) {
		try {
			return await TaskModel.create({ userId, title, description })
		} catch (e) {
			console.log(e)
		}
	}

	async updateTask(taskId, title, description, completed) {
		try {
			return await TaskModel.updateOne({ _id: taskId }, { title, description, completed }).exec()
		} catch (e) {
			console.log(e)
		}
	}

	async deleteTask(taskId) {
		try {
			return await TaskModel.deleteOne({ _id: taskId }).exec()
		} catch (e) {
			console.log(e)
		}
	}

	async updateCompleted(taskId, completed) {
		try {
			return await TaskModel.updateOne({ _id: taskId }, { completed }).exec()
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new TaskService()
