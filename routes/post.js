var express = require('express');
const { add_post, all_post, single_post, search_post, set_post, update_post, delete_post } = require('../controller/post');
var router = express.Router();

router.post('/add/:id',add_post);
router.post('/update/:userId/:id',update_post);
router.get('/:userId',all_post);
router.get('/:userId/:id',single_post);
router.get('/search/:userId/:key',search_post);
router.get('/page/:userId/:page_no',set_post);
router.get('/delete/:userId/:id',delete_post);

module.exports = router;