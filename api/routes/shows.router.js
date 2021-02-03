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
  .get('/', getShows)
  .get('/type/:type', getShowsByGenre)
  .get('/name/:name', getShowsByName)
  .get('/artist.name/:name', getShowsByArtist)

  .post('/', authUser, createShow)

//   router.get('/', authUser, getShow)

module.exports = router