const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    show: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'show'
    },
    date: {
        type: Date,
        default: Date.now() // Get a timestamp :)
    }
})

const purchaseModel = mongoose.model('purchase', purchaseSchema)
module.exports = purchaseModel
