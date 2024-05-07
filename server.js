// server.js
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./db')
const taskRoutes = require('./routes/tasks')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/tasks', taskRoutes) // Use task routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
