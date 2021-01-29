const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        required: true //se le puede poner un mensaje?
    },
    type: {
        type: String,
        lowercase: true,
        enum: ['music', 'comedy', 'kids'],
        required: [true, 'Type is required']
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: String,
        required: [true, 'Date is required']
    },
    place: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxlength: 150,
        required: true
    },
    photo: {
        type: String
    }
})

const showModel = mongoose.model('show', showSchema)
module.exports = showModel