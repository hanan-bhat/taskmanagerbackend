// db.js
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB Atlas')
})

module.exports = db
