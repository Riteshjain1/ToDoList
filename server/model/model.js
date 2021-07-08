const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    tag : {
        type : String,
        required: true
    },
    todo : {
        type: String,
        required: true,
        unique: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;