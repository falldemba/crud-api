const RoleModel = require('../models/Role.model')

let RoleController = {
    find: async(req, res) => {
        res.json(await RoleModel.find({ _id: req.params.roleID }))
    },
    all: async(_req, res) => {
        let allRoles = await RoleModel.find()
        res.json(allRoles)
    },
    create: async(req, res) => {
        let newRole = new RoleModel(req.body)
        await newRole.save((err, role) => {
            if (err) {
                res.status(403)
                res.send(err)
            }
            res.json(role)
        })
    }
}


module.exports = RoleController