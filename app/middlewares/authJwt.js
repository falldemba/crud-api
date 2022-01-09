const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/db.config')


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if (!token)
        return res.status(403).json({ message: "No token provider" })
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: "Unauthorized!" })
        req.userId = decoded.id
        next()
    })
}

isAdmin = (req, res, next) => {

}