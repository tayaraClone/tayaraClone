const mongoose, { Schema } = require('mongoose');

const productSchema = new Schema({
    account_id: String,
    name: String,
    description: String,
    stockCondition: String,
    withDelivery: String,
    categorie: String,
    delivery: String,
    productPlace: String,
    createAt: String,
    updatedAt: String

})

mongoose.model('Products', productSchema)
