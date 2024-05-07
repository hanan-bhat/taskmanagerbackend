// routes/tasks.js
const express = require('express')
const Task = require('../models/Task')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body
    const newTask = await Task.create({ title, description })
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
