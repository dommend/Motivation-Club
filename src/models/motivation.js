const mongoose = require('mongoose')

const motivationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    motivationMessage: {
        type: String,
        required: true,
        trim: true,
    },    
})

const Motivation = mongoose.model('Motivation', motivationSchema)

module.exports = Motivation