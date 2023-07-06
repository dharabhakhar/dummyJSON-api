var express = require('express');
const { add_user, all_user, single_user, search_user, set_user, update_user, delete_user } = require('../controller/user');
var router = express.Router();

/* GET users listing. */
router.post('/add_user', add_user);
router.get('/', all_user);
router.get('/:id', single_user);
router.get('/search/:key', search_user);
router.get('/set_user/:page_no', set_user);
router.post('/update/:id', update_user);
router.get('/delete/:id', delete_user);

module.exports = router;