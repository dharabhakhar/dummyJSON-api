var express = require('express');
var router = express.Router();
var {register, user_login} = require('../controller/login');

/* GET home page. */
router.post('/register',register);
router.get('/',user_login);

module.exports = router;
