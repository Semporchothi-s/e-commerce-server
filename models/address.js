var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var address = new Schema({
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },
    createdAt: { type: String, required: true },
    modifiedAt: { type: String, required: true },
})

module.exports = mongoose.model("address", address);