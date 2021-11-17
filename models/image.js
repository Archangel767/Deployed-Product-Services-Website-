const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgSrc: String,
    width: Number,
    height: Number,
    cost: Number,
});

module.exports = mongoose.model('Food', foodSchema);