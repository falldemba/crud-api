const mongoose = require('mongoose')
require('dotenv').config()


const mongooseConfig = mongoose.connect(
    process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const secretKey = process.env.SECRET
module.exports = { mongooseConfig, secretKey }