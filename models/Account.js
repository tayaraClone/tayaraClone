const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    account_id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: Number,
    createdAt: String,
    updatedAt: String,
    latitude: Number,
    longitude: Number,
    heightAccuracy: Number,
    verified: Boolean
})

mongoose.model('Accounts', accountSchema)