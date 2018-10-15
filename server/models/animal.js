const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creates animal schema
const AnimalSchema = new Schema ({
    imgURL: String,
    name: String,
    age: String,
    breed: String,
    email: String,
    description: String,
    lat: String,
    lng: String
});

module.exports = mongoose.model('animal', AnimalSchema);