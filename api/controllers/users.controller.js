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
    const query = req.query.name ? { name: { $regex: `${req.query.name}`, $options: 'i' } } : {}
    UserModel
      .find(query)
      .populate({
        path: 'artist.shows',
        'model': 'show'
      })
      .then(response => {
        res.json(response)
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
  UserModel
    .findById(res.locals.userId)
    .populate({
      path: 'artist.shows',
      'model': 'show'
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateUser(req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateArtist(req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => {
      res.json(response)
    })
    .catch((err) => handleError(err, res))
}
