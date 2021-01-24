const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const postRouter = require('./posts.router')
const { authUser } = require('../utils') // Authenticated Route

router
  .use('/users', usersRouter)//añadiendo authUser capamos todo sino estas autenticado
  .use('/auth', authRouter)
  .use('/posts', postRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

router.post('/auth/signup') // { username: nombre, email, password: passwd}
router.post('/auth/login')

module.exports = router
