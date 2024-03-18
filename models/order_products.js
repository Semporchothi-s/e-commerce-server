var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var orders = require('./order')

var orderProducts = new Schema({
    orderId: {type: Schema.Types.ObjectId, ref: orders},
    productId: {type:Schema.Types.ObjectId, required: true},
    quantity: {type: String, required: true},
})

module.exports = mongoose.model("orderProducts", orderProducts)