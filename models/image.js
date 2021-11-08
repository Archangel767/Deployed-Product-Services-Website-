const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  description: String,
  imgSrc: String,
  width: Number,
  height: Number,
});

module.exports = mongoose.model('Food', foodSchema);