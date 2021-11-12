const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    email: String,

});

module.exports = mongoose.model('Food', foodSchema);