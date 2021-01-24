const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')

// Authenticate Middleware
function authUser (req, res, next) {


  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }
      
      UserModel
        .findOne({ email: token.email })
        .then(user => {//ojo en user esta el dato passwd.Hay que crear una const quitandolo
          res.locals.user = user//mantiene la info del usuario registrado
          next()
        })
        .catch(err => res.json(err))
    })
  }
}

// Return HTTP error with details in JSON
function handleError (err, res) {
  return res.status(400).json(err)
}

module.exports = {
  authUser,
  handleError
}
