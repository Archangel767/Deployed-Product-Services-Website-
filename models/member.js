const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: String,
    profilePic: String,
    title: String,
    bio: String,
    github: String,
});

module.exports = mongoose.model('Team', teamSchema);