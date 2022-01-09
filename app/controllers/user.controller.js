const UserModel = require('../models/User.model')
const Crypted = require('../config/helper.config')

let UserController = {
    find: async(req, res) => {
        res.json(await UserModel.find({ _id: req.params.userId }).populate("role"))
    },

    create: async(req, res) => {
        req.body.password = Crypted._hash(req.body.password)
        let newUser = new UserModel(req.body)
        await newUser.save((err, user) => {
            if (err)
                res.status(403).json(err)
            res.status(201).json(user)
        })
    },
    all: async(_req, res) => {
        res.json(await UserModel.find().populate("role"))
    },

    update: async(req, res) => {
        UserModel.findByIdAndUpdate({ _id: req.params.userId }, {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: Crypted._hash(req.body.password),
                    role: req.body.role,
                    status: req.body.status
                }
            }, {
                new: true
            },
            (err, user) => {
                if (err) {
                    res.status(403)
                    res.json(err)
                }
                res.json({ message: "user updated success" })
            })
    }
}

module.exports = UserController