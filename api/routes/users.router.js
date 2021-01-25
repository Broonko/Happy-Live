const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllArtists,
  getUserById,
  updateUser,
  createArtist,
  deleteUserById
} = require('../controllers/users.controller')


router
  .get('/', getAllArtists)//funciona
  // .get('/:id', getUserById)
  .put('/me', authUser, updateUser)//funciona
  .put('/me', authUser, createArtist)//funciona



  // .delete('/:id', deleteUserById)

module.exports = router
