const express = require('express')

const app = express()

app.use('/user', require('./AuthRoute'))
app.use('/task', require('./TaskRoute'))

module.exports = app
