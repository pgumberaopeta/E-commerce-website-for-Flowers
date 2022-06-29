const mongoose = require('mongoose')

var mongoURL = "mongodb+srv://flowers-ecom:flowers-ecom@cluster0.xymolvf.mongodb.net/contentdb?retryWrites=true&w=majority"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('Con failed');
})

dbconnect.on('connected', () => {
    console.log('Con success');
})

module.exports = mongoose