const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgSrc: String,
    width: Number,
    height: Number,
});

module.exports = mongoose.models('Food', foodSchema);