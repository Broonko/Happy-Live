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
    console.log(req.body.name + res.locals.userId + '+++++++createshow')
    console.log(res.locals.artist.genre)
    console.log(res.locals.artistName)
    if (res.locals.artist.genre) {
        console.log("......" + res.locals.artist.genre)
        ShowModel
            .create({
                name: req.body.name,
                type: req.body.type,
                artist: res.locals.userId,
                date: req.body.date,
                place: req.body.place,
                duration: req.body.duration,
                price: req.body.price,
                description: req.body.description
            })
            .then(response => {
                console.log("hola response")
                console.log("////" + res.locals.userId)
                console.log("ppppp" + res.locals.artist)
                UserModel
                    .findOne(res.locals.userId)
                    .then(user => {
                        console.log("%%%" + user)
                        // res.locals.artist.push(user._id)
                        console.log("?????" + user._id)
                        user.artist.shows.push(response._id)
                        user.save()
                        console.log(user.artist.shows)
                        console.log("----" + res.locals.artist)
                    })
                    .catch((err) => handleError(err, res))
                res.json(response)
            })
            .catch((err) => handleError(err, res))
    } else {
        console.log('no eres artista')
        res.send('No puedes crear un show porque no eres artista')
    }
}

function getShows(req, res) {
    console.log("*******")
    ShowModel
        .find()
        .then(response => {
            // console.log(response)
            res.json(response)
            response.forEach(show => {

                console.log(show.name)
            })

        })
        .catch((err) => handleError(err, res))
}

function getShowsByName(req, res) {
    console.log("+++" + req.query)
    ShowModel
        .find(req.query)
        .then(response => res.json(response[0].artist))
        .catch((err) => handleError(err, res))
}

function getShowsByGenre(req, res) {
    console.log("***" + req.query.type)
    ShowModel
        .find(req.query)
        .then(response => res.json(response[0].artist))
        .catch((err) => handleError(err, res))
}
