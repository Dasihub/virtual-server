require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('./models/userModel')

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cookieParser())
app.use(cors())

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO)
		app.listen(PORT, () => console.log(`Server is working in port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

connect()
