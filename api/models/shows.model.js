const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        required: [true, 'Name is required']
    },
    type: {
        type: String,
        lowercase: true,
        enum: ['music', 'comedy', 'kids'],
        required: [true, 'Type is required']
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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
        type: String,
        required: true
    }
})

const showModel = mongoose.model('show', showSchema)
module.exports = showModel