const express = require('express')
const router = express.Router()
const User = require('../actions/user_actions')

router.get('/', (req,  res)=> {res.json({success: true})})
router.post('/user/add', User.create);
router.post('/user/login', User.login);

router.post('/user/get_details', User.details);

module.exports = router;