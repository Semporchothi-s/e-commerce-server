var mongoose = require("mongoose")
var Schema = mongoose.Schema

var user = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true, enum: ['ENABLED', 'DISABLED', 'HOLD'], default: 'ENABLED' },
    createdAt:{type: String, requred:true},
    modifiedAt:{type:String, required: true}
})

module.exports = mongoose.model("user", user);