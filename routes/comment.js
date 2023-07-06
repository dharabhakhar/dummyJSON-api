var express = require('express');
const { add_cmt, all_cmt, single_cmt, set_cmt, update_cmt, delete_cmt } = require('../controller/comment');
var router = express.Router();

router.post('/add/:userId/:postId',add_cmt);
router.get('/:userId/:postId',all_cmt);
router.get('/single/:userId/:postId/:id',single_cmt);
router.get('/page/:userId/:postId/:page_no',set_cmt);
router.post('/update/:userId/:postId/:id',update_cmt);
router.get('/delete/:userId/:postId/:id',delete_cmt);

module.exports = router;