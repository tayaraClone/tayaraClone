const mongoose = require('mongoose');
const { Schema } = mongoose
const productSchema = new Schema({
    _id: Schema.Types.ObjectId,
    account_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    stockCondition: {
        type: String,
        default: null
    },
    categorie: {
        type: String,
        required: true
    },
    deliveryCondition: {
        type: String,
        required: true
    },
    productPlace: {
        type: String,
        required: null
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    }

})

mongoose.model('Products', productSchema)
