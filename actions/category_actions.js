var category = require('../models/category');
var Response = require('../response/response');
var Errors = require('../constants/errors');
var Constants = require('../constants/constants');

class Category {

    static async create(req, res) {
        var body = req.body;
        await _validateRequestAndSave(body, res);
    }

    static async get(req, res) {
        var categoryList = await category.find({status: Constants.ACTIVE});
        Response.success(res, "", categoryList);
    }

    static async setStatus(req, res) {
        var body = req.body;
        await category.findById(body.id).then (result => {
            _validateResultAndUpdate(result, res, body);
        }
        );
    }

    static async update(req, res){
        //TODO: 
    }
}

async function _validateRequestAndSave(body, res) {
    if (_isValidCreateReq(body)) {
        Response.failed(res, Errors.emptyFields);
    } else if (await _isCategoryAvailable(body)) {
        Response.failed(res, Errors.categoryAlreadyExists);
    }
    else {
        var newCategory = _createCategoryMap(body);
        await _saveCategory(newCategory, res);
    }
}

function _isValidCreateReq(body) {
    return !body.categoryName || !body.image || !body.mimeType;
}

async function _isCategoryAvailable(body) {
    return await category.find({ categoryName: { '$regex': body.categoryName, $options: 'i' }}).count() > 0;
}

function _createCategoryMap(body) {
    return category({
        categoryName: body.categoryName,
        image: body.image,
        mimeType: body.mimeType,
        createdAt: Date(),
    });
}

async function _saveCategory(newCategory, res) {
    await newCategory.save().then(value => {
        if (value.errors) {
            Response.failed(res, Errors.categoryCreationFailed);
        } else {
            Response.success(res, Errors.categoryCreated, value);
        }
    });
}

function _validateResultAndUpdate(result, res, body) {
    if (!result.errors) {
        if (!result) {
            Response.failed(res, Error.invalidCategory);
        } else {
            _updateCategory(result, body, res);
        }
    }
}

function _updateCategory(result, body, res) {
    result.status = body.status;
    result.modifiedAt = Date();
    result.save().then(value => {
        Response.success(res, Errors.categoryStatusChanged, value);
    });
}

module.exports = Category;

