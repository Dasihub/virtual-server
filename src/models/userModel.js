const { Schema, model } = require('mongoose')

const schema = new Schema({
	email: { type: String, unique: true, required: true },
	name: { type: String, required: true },
	password: { type: String, required: true }
})

const UserModel = model('users', schema)

module.exports = UserModel
