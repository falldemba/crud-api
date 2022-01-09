const mongoose = require('mongoose')

const User = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
    status: {
        type: Boolean,
        require: true,
        default: true
    }

})

module.exports = mongoose.model("User", User)