var express = require('express');
var router = express.Router();
var Product = require('../actions/product_actions');
var Category = require('../actions/category_actions');


router.post('/category/create', Category.create);
router.post('/category/get', Category.get);
router.post('/category/status', Category.setStatus);

module.exports = router;