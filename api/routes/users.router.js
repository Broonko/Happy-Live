const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllArtists,
  getUserById,
  updateUser,
  updateArtist,
  getShowsByArtist,
  deleteUserById
} = require('../controllers/users.controller')

router
  .get('/:id', authUser, getUserById)
  .get('/', getAllArtists)
  .get('/name', getShowsByArtist)
  .put('/me', authUser, updateUser)
  .put('/me/artist', authUser, updateArtist)
  
  
  // .delete('/:id', deleteUserById)

module.exports = router
