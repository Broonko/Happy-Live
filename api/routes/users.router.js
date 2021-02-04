const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllArtists,
  getProfile,
  getUserById,
  updateUser,
  updateArtist
} = require('../controllers/users.controller')

router
  .get('/', getAllArtists)
  .get('/me', authUser, getProfile)
  .get('/:id', authUser, getUserById)
  .put('/me', authUser, updateUser)
  .put('/me/artist', authUser, updateArtist)

module.exports = router
