const bcrypt = require('bcrypt')
require('dotenv').config()


const Crypted = {
    _hash: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS)))
    },
    _compare: async(password, crypetedPassword) => {
        return bcrypt.compareSync(password, crypetedPassword)
    }

}

module.exports = Crypted