require('dotenv').config({path: './config/.env'})
const express = require('express')
const connectDb = require('./config/db')

connectDb()

const app = express()

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})