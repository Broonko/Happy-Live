const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllArtists,
  getProfile,
  getUserById,
  updateUser,
  updateArtist,
  deleteUserById
} = require('../controllers/users.controller')

router
.get('/me', authUser, getProfile)
.get('/', getAllArtists)
  .get('/:id', authUser, getUserById)
  .put('/me', authUser, updateUser)
  .put('/me/artist', authUser, updateArtist)


// .delete('/:id', deleteUserById)

module.exports = router
