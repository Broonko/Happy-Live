const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const showRouter = require('./shows.router')
const purchaseRouter = require('./purchases.router')

const { authUser } = require('../utils') // Authenticated Route

router
  .use('/users', usersRouter)
  .use('/auth', authRouter)
  .use('/shows', showRouter)
  .use('/purchases', purchaseRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name} ${res.locals.user.email} ${res.locals.user}`)
})

router.post('/auth/signup') // { username: nombre, email, password: passwd}
router.post('/auth/login')

module.exports = router
