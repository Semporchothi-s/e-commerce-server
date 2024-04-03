var mongoose = require("mongoose")
var Schema = mongoose.Schema

var product = new Schema({
    productName: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    stockQuantity: { type: String, required: true },
    createdAt: { type: String, required: true },
    modifiedAt: { type: String, required: true }
})

module.exports = mongoose.model('product', product);