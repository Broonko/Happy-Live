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
    console.log("entra en ticket")
    console.log(req.body)
    PurchaseModel
        .create({
            user: res.locals.userId,
            show: req.body.show
        })
        .then(response => {
            console.log(response)
            res.json(response)
        }
        )
        .catch((err) => handleError(err, res))
}

function listPurchases(req, res) {
    console.log("entra en lista de compras")
    console.log("+++++++" + req.params)
    var user = res.locals.userId
    console.log("//////" + user)
    PurchaseModel
        .find({ user: res.locals.userId })
        .populate('user')
        .populate('show')
        .then(response => {
            
            res.json(response)
           
            response.forEach(purchase => {
         
                console.log(purchase.user._id)
                console.log(res.locals.userId)
                console.log(purchase.show)
          
            })
        })
        .catch((err) => handleError(err, res))
}
