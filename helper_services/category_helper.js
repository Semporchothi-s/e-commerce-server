const category = require('../models/category');

function isInvalidReq(body) {
    return !body.categoryName || !body.image;
}

async function isCategoryAvailable(body) {
    return await category.find({ categoryName: { '$regex': body.categoryName, $options: 'i' } }).count() > 0;
}

function createCategoryMap(body) {
    return category({
        categoryName: body.categoryName,
        image: body.image,
        createdAt: Date(),
    });
}

module.exports = {isInvalidReq, isCategoryAvailable, createCategoryMap}

