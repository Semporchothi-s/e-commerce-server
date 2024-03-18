var mongoose = require('mongoose')
var Schema = mongoose.Schema


var order = new Schema({
    total: {type: String, required: true},
    status: {type: String, required: true, enum: ["ORDER_CREATED", "ORDER_PLACED", "IN_PROGRESS", "SHIPPED", "DELIVERED"], default: "ORDER_CREATED"},
    createdAt: {type: Date, required: true},
    modifiedAt: {type: Date, requored: true},
})

module.exports = mongoose.model("order", order)