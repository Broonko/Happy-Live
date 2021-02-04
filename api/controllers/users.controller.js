const { json } = require('express')
const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllArtists,
  getUserById,
  getProfile,
  updateUser,
  updateArtist
}

function getAllArtists(req, res) {
  console.log(req.query)
  UserModel
    .find(req.query)
    .populate({
      path: 'artist.shows',
      'model': 'show'
    })
    .then(response => {
      res.json(response)
      // let result = []
      // response.forEach(elem => {
      //   if (elem.artist.genre) {
      //     console.log(elem.name)
      //     console.log(elem._id)
      //     result.push({
      //       name: elem.name,
      //       id: elem._id,
      //       photo: elem.photo
      //     })
      //   }
      // })
      // res.send(result)
    })
    .catch((err) => handleError(err, res))
}

function getUserById(req, res) {
  UserModel
    .findById(req.params.id)
    .populate({
      path: 'artist.shows',
      'model': 'show'
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getProfile(req, res) {
  console.log("++++++" + res.locals.userId)
  UserModel
    .findById(res.locals.userId)
    .populate({
      path: 'artist.shows',
      'model': 'show'
    })
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
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateArtist(req, res) {
  console.log(res.locals.userId)
  console.log(req.body)
  UserModel
    .findByIdAndUpdate(res.locals.userId, {$set : req.body}, {
      new: true,
      runValidators: true,
      omitUndefined: true,
      upsert: true
    })
    .then(response => {
      console.log(response)
      res.json(response)
    })
    .catch((err) => handleError(err, res))
}

