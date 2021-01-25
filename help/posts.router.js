const router = require('express').Router()
const { authUser } = require('../api/utils')

const {
  createPost,
  getPosts
} = require('./posts.controller')

router.post('/', authUser, createPost)//usando authUser sólo permitimos getAllUser a los user autorizados
router.get('/', authUser, getPosts)

module.exports = router
