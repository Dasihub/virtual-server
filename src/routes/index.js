const express = require('express')
const authGuard = require('../guard/authGuard')

const app = express()

app.use('/user', require('./AuthRoute'))
app.use('/task', authGuard, require('./TaskRoute'))

module.exports = app
