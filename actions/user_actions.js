var user = require('../models/user')
var Response = require('../response/response')
var Errors = require('../constants/errors')

class User {

    static async create(req, res) {
        var body = req.body;
        await _validateCreateRequestAndSave(body, res, req);
    }

    static async login(req, res) {
        var body = req.body;
        if (_validateLoginRequest(body)) {
            Response.failed(res, Errors.emptyFields);
        } else {
            await _findUser(body, res);
        }
    }

    static async details(req, res){
        var body = req.body;
        if(!body.id){
            Response.failed(res, Errors.emptyUserId);
        }else{
            await _getUserDetails(body, res);
        }
    }

}

async function _findUser(body, res) {
    var _user = await _findUserByMailOrMobile(body);
    if (_user.length > 0) {
        Response.success(res, Errors.loggedIn, _user);
    } else {
        Response.failed(res, Errors.userNotFound);
    }
}

async function _findUserByMailOrMobile(body) {
    var query = !body.email 
    ? { mobile: body.mobile, password: body.password } 
    : { email: body.email, password: body.password };

    return await user.find(query, '_id');
}

async function _validateCreateRequestAndSave(body, res, req) {
    if (_isValidRequest(body)) {
        Response.failed(res, Errors.emptyFields);
    } else if (_isValidPassword(body)) {
        Response.failed(res, Errors.invalidPassword);
    } else if (await _isUserExists(body)) {
        Response.failed(res, Errors.userAlreadyExists);
    } else {
        var newUser = createUserObject(req);
        await saveUser(newUser, res);
    }
}

function _validateLoginRequest(body) {
    return !(body.email || body.mobile) || !body.password;
}


function _isValidRequest(body) {
    return !body.firstName || !body.lastName || !body.email || !body.mobile || !body.password;
}

function _isValidPassword(body) {
    return body.password.length < 8;
}

async function _isUserExists(body) {
    return await user.find({ email: body.email }).count() >= 1 ||
        await user.find({ mobile: body.mobile }).count() >= 1;
}

function createUserObject(req) {
    var body = req.body;
    var newUser = user({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        mobile: body.mobile,
        password: body.password,
        image: body.image,
        createdAt: Date(),
    });
    return newUser;
}

async function saveUser(newUser, res) {
    try {
        await newUser.save().then(value => {
            if (value.error) {
                Response.failed(res, Errors.userCreationFailed);
            } else {
                Response.success(res, Errors.userCreated, value);
            }
        }
        );
    } catch (e) {
        Response.failed(res, e.message);
        console.log(e.message);
    }
}

async function _getUserDetails(body, res) {
    var currentUser = await user.find({ _id: body.id });
    if (currentUser.length > 0) {
        Response.success(res, "", currentUser);
    } else {
        Response.failed(res, Errors.userNotFound);
    }
}

module.exports = User;