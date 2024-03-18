var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var category = new Schema({
    categoryName: {type: String, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('category', category)