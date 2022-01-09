const userModel = require('../models/User.model')
const roleModel = require('../models/Role.model')

const Checked = {
    checkDuplicatePhoneNumberOrEmail: (req, res, next) => {
        userModel.findOne({ phone: req.body.phone }).exec((err, user) => {
            if (err) {
                res.status(500).json({ message: err })
                return
            }
            if (user) {
                res.status(400).json({ message: "Failed! phone is already in use!" })
                return
            }

            userModel.findOne({ email: req.body.email }).exec((err, user) => {
                if (err) {
                    res.status(500).json({ message: err })
                }
                if (user) {
                    res.status(400).json({ message: "Failed Email is already in use!" })
                    return
                }
                next()
            })
        })
    },
    checkedRolesExisted = (req, res, next) => {
        if (req.body.roles) {
            for (let index = 0; index < req.body.roles.length; index++) {
                roleModel.findOne({ _id: req.body.roles[index] }).exec((err, role) => {
                    if (err) {
                        res.status(500).json({ message: err })
                    }
                    if (!role) {
                        res.status(400).json({ message: `Failed! Role ${req.body.roles[index]} does not exist!` })
                    }
                })
                return
            }
        }
        next()
    }
}

module.exports = Checked