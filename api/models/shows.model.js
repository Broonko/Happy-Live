const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50, //se le puede poner un mensaje?
    },
    type: {
        type: String,
        enum: ['music', 'comedy', 'infantil'],
        required: [true, 'Type is required']
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artists'
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    place: {
        type: String
    },
    duration: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        maxlength: 100
    }
})

const showModel = mongoose.model('show', userSchema)
module.exports = showModel