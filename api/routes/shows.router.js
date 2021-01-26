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
  .get('/name', getShowsByName)
  .get('/type', getShowsByGenre)

  .post('/', authUser, createShow)

//   router.get('/', authUser, getShow)

module.exports = router