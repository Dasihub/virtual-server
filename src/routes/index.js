const express = require('express')

const app = express()

app.use('/user', require('./AuthRoute'))

module.exports = app
