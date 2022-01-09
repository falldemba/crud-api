const express = require('express')
const router = require('./app/routes/router')
const mongooseConfig = require('./app/config/db.config')
const cors = require('cors')
const PORT = process.env.PORT || 8000

const app = express()

mongooseConfig.then(() => {})
app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.urlencoded({ extended: false }))
app.listen(PORT, async() => {
    console.log(`server up on port ${PORT}`)
})