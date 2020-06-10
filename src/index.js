const path = require('path')
const express = require('express')
const Motivation = require('./models/motivation')
const motivationRouter = require('./routers/motivation')
const publicDirectory = path.join(__dirname, '../public')
require('./mongoose')

const app = express()
app.use(express.static(publicDirectory))

app.use(express.json())
app.use(motivationRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is running. Port: 3000')
})