const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  balance: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  },
  artist: {
    genre: {
      type: String,
      required: false
    },
    bio: {
      type: String,
      maxlength: 150,
      required: false
    },
    shows:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'show'
    }],
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }]
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
