const PurchaseModel = require('../models/purchases.model')
const ShowModel = require('../models/shows.model')
const UserModel = require('../models/users.model')
const { handleError } = require('../utils')
const { json } = require('express')

module.exports = {
    getTicket,
    listPurchases
}

function getTicket(req, res) {
    PurchaseModel
        .create({
            user: res.locals.userId,
            show: req.body.show
        })
        .then(response => {
            res.json(response)
        }
        )
        .catch((err) => handleError(err, res))
}

function listPurchases(req, res) {
    PurchaseModel
        .find({ user: res.locals.userId })
        .populate('user')
        .populate('show')
        .then(response => {
            res.json(response)
            response.forEach(purchase => {
            })
        })
        .catch((err) => handleError(err, res))
}
