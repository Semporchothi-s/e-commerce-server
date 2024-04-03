var category = require('../models/category');
var Response = require('../response/response');
var Errors = require('../constants/errors');
var Constants = require('../constants/constants');
const { isInvalidReq, isCategoryAvailable, createCategoryMap } = require('../helper_services/category_helper');

class Category {

    static async create(req, res) {
        var body = req.body;
        await _validateRequestAndSave(body, res);
    }

    static async get(req, res) {
        var categoryList = await category.find({ status: Constants.ACTIVE });
        Response.success(res, "", categoryList);
    }

    static async setStatus(req, res) {
        var body = req.body;

        if (!body.id) {
            Response.failed(res, Errors.requiredCategoryId);
            return;
        } else {
            await _findAndSetStatus(body, res);
        }
    }

    static async update(req, res) {
        var body = req.body;
        _validateAndUpdate(body, res);
    }

    static async delete(req, res){
        var body = req.body;
        await category.deleteOne({_id: body.id}).then(value => {
            Response.success(res, Errors.categoryRemoved, value);
        })
        
    }
}


async function _validateRequestAndSave(body, res) {
    if (isInvalidReq(body)) {
        Response.failed(res, Errors.emptyFields);
    } else if (await isCategoryAvailable(body)) {
        Response.failed(res, Errors.categoryAlreadyExists);
    }
    else {
        var newCategory = createCategoryMap(body);
        await _saveCategory(newCategory, res);
    }
}

async function _saveCategory(newCategory, res) {
    await newCategory.save().then(value => {
        if (value.errors) {
            Response.failed(res, Errors.categoryCreationFailed);
            return;
        } else {
            Response.success(res, Errors.categoryCreated, value);
        }
    });
}

async function _findAndSetStatus(body, res) {
    await category.findById(body.id).then(result => {
        _validateResultAndUpdate(result, res, body, true);
    });
}

async function _validateAndUpdate(body, res){
    if (!body.id) {
        Response.failed(res, Errors.requiredCategoryId);
        return;
    }

    if (isInvalidReq(body)) {
        Response.failed(res, Errors.emptyFields);
        return;
    }

    else {
        await category.findById(body.id).then(result => {
            _validateResultAndUpdate(result, res, body, false)
        });
    }
}

function _validateResultAndUpdate(result, res, body, updateOnlyStatus) {
    if (!result) {
        Response.failed(res, Errors.invalidCategory);
        return;
    }

    if (result.errors) {
        Response.failed(res, Errors.unKnownErrorMsg);
        return;
    }

    if (updateOnlyStatus) { _updateStatus(result, body, res); }
    else { _updateCategory(result, body, res); }

}

function _updateStatus(result, body, res) {
    result.status = body.status;
    result.modifiedAt = Date();
    result.save().then(value => {
        Response.success(res, Errors.categoryStatusChanged, value);
    });
}

function _updateCategory(result, body, res) {
    result.categoryName = body.categoryName;
    result.image = body.image;
    result.status = body.status;
    result.modifiedAt = Date();
    result.save().then(value => {
        Response.success(res, Errors.categoryStatusChanged, value);
    });
}

module.exports = Category;

