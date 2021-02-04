const ShowModel = require('../models/shows.model')
const UserModel = require('../models/users.model')
const { handleError } = require('../utils')
const { json } = require('express')

module.exports = {
    createShow,
    getShows,
    getShowsByName,
    getShowsByGenre
}

function createShow(req, res) {
    if (res.locals.artist.genre) {
        ShowModel
            .create({
                name: req.body.name,
                type: req.body.type,
                artist: res.locals.userId,
                date: req.body.date,
                place: req.body.place,
                duration: req.body.duration,
                price: req.body.price,
                description: req.body.description,
                photo: req.body.photo
            })
            .populate('user')
            .then(response => {
                UserModel
                    .findOne(res.locals.userId)
                    .then(user => {
                        user.artist.shows.push(response._id)
                        user.save()
                    })
                    .catch((err) => handleError(err, res))
                res.json(response)
            })
            .catch((err) => handleError(err, res))
    } else {
        res.send('No puedes crear un show porque no eres artista')
    }
}

function getShows(req, res) {
    ShowModel
        .find(req.query)
        .then(response => {
            res.json(response)
            response.forEach(show => {
            })
        })
        .catch((err) => handleError(err, res))
}

function getShowsByGenre(req, res) {
    const query = { name: {$regex: `${req.params.type}`, $options: 'i'}} 
    ShowModel
        .find({ type: { $regex: `${req.params.type}`, $options: 'i' }})
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function getShowsByName(req, res) {
    ShowModel
        .find({ name: { $regex: `${req.params.name}`, $options: 'i' }})
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}
