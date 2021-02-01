const router = require('express').Router()
const { authUser } = require('../utils')

const {
    listPurchases,
    getTicket

} = require('../controllers/purchases.controller')

router
    .get('/', authUser, listPurchases)
    .post('/', authUser, getTicket)

module.exports = router
