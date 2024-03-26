
class Response{

static failed(res, msg) {
    return res.status(403).json(
        {
            success: false,
            msg: msg,
        });
}

static success(res, msg, response){
    return res.status(200).json(
        {
            success: true,
            msg: msg,
            response
        }
    )
}
}
module.exports = Response;