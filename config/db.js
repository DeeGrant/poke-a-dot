require('dotenv').config('./config/.env')
const mongoose = require('mongoose')

const dbConnectionStr = process.env.DB_STRING

async function connectDb() {
    try {
        const connection = await mongoose.connect(dbConnectionStr)
        console.log(`Connected to: ${connection.connection.host}`)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

module.exports = connectDb