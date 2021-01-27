const { json } = require('express')
const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllArtists,
  getUserById,
  updateUser,
  updateArtist,
  deleteUserById,
  getShowsByArtist
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
  console.log("+++++++" + req.params.id)
  console.log(res.locals.userId)
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
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateArtist(req, res) {
  console.log(res.locals.userId)
  console.log(req.body)
  UserModel
    .findByIdAndUpdate(res.locals.userId, req.body, {
      new: true,
      runValidators: true,
      upsert: false
    })
    .then(response => {
      console.log(response)
      res.json(response)})
    .catch((err) => handleError(err, res))
}


// function updateArtist(req, res) {
//   // console.log(res.locals.userId)
//   // console.log(res.locals.artist.genre)
//   // console.log(req.body)
//   if (res.locals.artist.genre) {
//   UserModel
//     .findByIdAndUpdate(res.locals.userId, req.body, {
//       new: true,
//       runValidators: true
//     })
//     .then(response => res.json({
//       name: response.name
//     }))
//     .catch((err) => handleError(err, res))
//   } else {
//       console.log('No eres un artista')
//       res.send('No eres un artista')
//   }
// }


function getShowsByArtist(req, res) {

  console.log(req.query.name)
  UserModel
      .findOne(req.query)
      .then(response => {
        console.log(response.artist.shows)
        res.json(response.artist.shows)
      })
      
      .catch((err) => handleError(err, res))
}



function deleteUserById(req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}