const router = require('express').Router()
const { authUser } = require('../utils')

const {
  createShow,
  getShows,
  getShowsByName,
  getShowsByGenre
} = require('../controllers/shows.controller')

router
  .get('/', getShows)
  .get('/type/:type', getShowsByGenre)
  .get('/name/:name', getShowsByName)
  .post('/', authUser, createShow)

module.exports = router