const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    phonenumber: Number,
    createdAt: Date,
    updatedAt: Date,
    latitude: Number,
    longitude: Number,
    heightAccuracy: Number,
    verified: Boolean
})

mongoose.model('Accounts', accountSchema)