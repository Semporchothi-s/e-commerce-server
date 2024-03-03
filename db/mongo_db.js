const DBService = require("./db");
const mongoose = require("mongoose")

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
    const conn = await mongoose.connect(constants.MONGOURL, {});
    console.log('mongodb connected:');
}

module.exports = MongoDB