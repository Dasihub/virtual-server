class TaskController {
	async getAllTasks(req, res) {
		try {
		} catch (e) {
			console.log(e)
			res.status(500).json({
				data: true,
				message: 'Ошибка в сервере',
				type: 'error'
			})
		}
	}
}

module.exports = new TaskController()
