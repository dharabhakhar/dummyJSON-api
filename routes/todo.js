var express = require('express');
const { add_todo, all_todo, single_todo, set_todo, update_todo, delete_todo } = require('../controller/todo');
var router = express.Router();

router.post('/add/:userId',add_todo);
router.get('/:userId',all_todo);
router.get('/single/:userId/:id',single_todo);
router.get('/page/:userId/:page_no',set_todo);
router.post('/update/:userId/:id',update_todo);
router.get('/delete/:userId/:id',delete_todo);

module.exports = router;