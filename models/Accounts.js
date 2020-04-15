const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 7
    },
    phonenumber: Number,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    },
    latitude: {
        type: Number,
        default: null
    },
    longitude: {
        type: Number,
        default: null
    },
    heightAccuracy: {
        type: Number,
        default: null
    },
    verified: {
        type: Boolean,
        default: false
    }
})

mongoose.model('Accounts', accountSchema)