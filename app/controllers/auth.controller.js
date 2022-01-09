const bcrypt = require("bcrypt")
const UserModel = require('../models/User.model')
const Crypted = require('../config/helper.config')

let Auth = {
    login: async(req, res) => {
        if (!(req.body.username && req.body.password))
            return res.status(400).json({ error: "Data not formatted properly" })
        const user = await UserModel.findOne({ phone: req.body.username })
        if (user) {
            const validPassword = await Crypted._compare(req.body.password, user.password)
            if (validPassword)
                res.status(200).json({ message: "Valide password" })
            res.status(403).json({ message: "Invalid password" })
        }
        res.status(401).json({ error: "User does not exist" })
    }
}

module.exports = Auth