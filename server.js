// server.js
const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./db')
const taskRoutes = require('./functions/routes/tasks')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/.netlify/functions/api/tasks', taskRoutes) // Use task routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports.handler = serverless(app)
