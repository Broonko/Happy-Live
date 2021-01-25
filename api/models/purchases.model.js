const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    show: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'shows'
    },
    date: {
        type: Date,
        default: Date.now() // Get a timestamp :)
    }
})

const purchaseModel = mongoose.model('purchase', purchaseSchema)
module.exports = purchaseModel
