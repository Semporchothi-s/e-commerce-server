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
}

async function connectToMongoDB() {
    const conn = await mongoose.connect(Constants.mongoUrl, {});
    console.log('mongodb connected:');
}

module.exports = MongoDB