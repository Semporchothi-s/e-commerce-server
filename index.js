const MongoDB = require("./db/mongo_db");

const dbService = new MongoDB();

dbService.connect()