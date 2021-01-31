const router = require('express').Router()
const { authUser } = require('../utils')

const {
  createShow,
  getShowsByArtist,
  getShows,
  getShowsByName,
  getShowsByGenre
} = require('../controllers/shows.controller')

router
  .get('/type', getShowsByGenre)
  .get('/', getShows)
  .get('/name', getShowsByArtist)
  .get('/name', getShowsByName)

  .post('/', authUser, createShow)

//   router.get('/', authUser, getShow)

module.exports = router