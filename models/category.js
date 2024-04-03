var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var category = new Schema({
    categoryName: { type: String, required: true },
    image: { type: String, required: true },

    // JPEG	image/jpeg	.jpeg
    // PNG	image/png	.png
    // GIF	image/gif	.gif
    // Generic Bitmap	image/bmp	.bmp
    // Microsoft Bitmap	image/x-ms-bmp	.bmp
    // PDF	application/pdf	.pdf
    // mimeType: { type: String, required: true },
    status: {type: String, required: true, enum: ['ACTIVE', 'DISABLED'], default: 'ACTIVE' },
    createdAt: {type: String, required: true},
    modifiedAt: {type: String, required: false},
})

module.exports = mongoose.model('category', category)