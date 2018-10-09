const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnimalSchema = new Schema ({

    imgURL: String,
    name: String,
    age: String,
    breed: String,
    email: String
    description: String

});

mongoose.model('animals', AnimalSchema);