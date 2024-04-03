const DBService = require("./db");
const mongoose = require("mongoose")
const Constants = require('../constants/constants')

class MongoDB extends DBService {
    async connect() {
        try {
            await connectToMongoDB()
        }
        catch (err) {
            console.log(err)
            process.exit(1)
        }
    }

    async disconnect(){
        await _disconnect();
    }
}

async function connectToMongoDB() {
    var uri = Constants.mongoUrl

    await mongoose.connect(uri, {});
    console.log('mongodb connected:' + uri);
}

async function _disconnect(){
    await mongoose.disconnect();
    console.log('mongodb disconnected')
}

module.exports = MongoDB