const { json } = require('express')
const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllArtists,
  getUserById,
  updateUser,
  createArtist,
  deleteUserById
}

function getAllArtists(req, res) {
  UserModel
    .find()
    .then(response => {
      let result = []
      response.forEach(elem => {
        if (elem.artist.genre) {
          console.log(elem.name)
          result.push(elem.name)
        }
      })
      res.send(result)
    })
    .catch((err) => handleError(err, res))
}

function getUserById(req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
// ${res.locals.user.name} ${res.locals.user.email}

function updateUser(req, res) {
  console.log(res.locals.userId)
  console.log(req.body)
  UserModel
    .findByIdAndUpdate(res.locals.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json({
      name: response.name
    }))
    .catch((err) => handleError(err, res))
}

function createArtist(req, res) {
  console.log(res.locals.userId)
  console.log(req.body)
  UserModel
    .findByIdAndUpdate(res.locals.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json({
      name: response.name
    }))
    .catch((err) => handleError(err, res))
}





function deleteUserById(req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}