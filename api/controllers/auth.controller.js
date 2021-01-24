const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

module.exports = {
    signUp,
    login
}

function signUp(req, res) {
    if (req.body && req.body.password) {
        const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
        userModel
            .create({
                name: req.body.name,
                email: req.body.email,
                password: encryptedPasswd
            })
            .then(user => {
                const data = { email: user.email, name: user.name }//id: user._id, name: user.name 
                const token = jwt.sign(data, process.env.SECRET) // { expiresIn: '7d' })
                res.status(200).json({ token: token, ...data })//{ name: user.name, email: user.mail } //.send('usuario creado')
            })
            .catch(err => res.status(500).json({ Error: `${req.body.email} already used` }))
    } else { res.status(500).send("Error: Revisa los datos introducidos") }
}

function login(req, res) {
    userModel
        .findOne({ email: req.body.email })
        .then(user => {
            if (!user) { return res.json({ Error: 'wrong email' }) }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (!result) { return res.json({ Error: `wrong password for ${req.body.email}` }) }
                const data = { name: user.name, email: req.body.email }//coger de user.(req.body.name no existe en este caso)
                const token = jwt.sign(data, process.env.SECRET, { expiresIn: '7d' })
                res.status(200).json({ token: token, ...data })//return??
            })
        })
        .catch(err => handleError(err, res))
}
