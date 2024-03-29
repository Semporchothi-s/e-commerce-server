const MongoDB = require("./db/mongo_db");
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const productRoutes = require('./routes/product_routes');

var app = express();
const dbService = new MongoDB();

dbService.connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(userRoutes);
app.use(productRoutes);

app.listen(8000, ()=> {
    console.log('Running at 8000')
})