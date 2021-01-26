const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: [true, 'Post must have a registered user']
    },
    createdAt: {
        type: Number,
        default: Date.now() // Get a timestamp :)
    }
})

const postModel = mongoose.model('post', postSchema)
module.exports = postModel
