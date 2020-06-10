const mongoose = require('mongoose')
const Motivation = require('./models/motivation')
 
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})