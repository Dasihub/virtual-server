const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	userId: { required: true, type: Types.ObjectId },
	title: { required: true, type: String },
	description: { type: String },
	completed: { type: Boolean, default: false }
})

const TaskModel = model('tasks', schema)

module.exports = TaskModel
