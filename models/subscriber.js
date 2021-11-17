const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
});

module.exports = mongoose.models('Subscriber', subscriberSchema);