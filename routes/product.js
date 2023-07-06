var express = require('express');
var router = express.Router();
var {all_product, add_product, single_product, search_product, set_product, product_category, update_product, delete_product, all_category} = require('../controller/product');

router.post('/add_product',add_product);
router.get('/',all_product);
router.get('/single/:id',single_product);
router.get('/search/:key',search_product);
router.get('/set_product/:page_no',set_product);
router.get('/category/:category',product_category);
router.post('/update/:id',update_product);
router.get('/delete/:id',delete_product);
router.get('/categories',all_category);

module.exports = router;