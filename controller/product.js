 const product = require('../moduler/product');

 /* Add product */

 const add_product = async (req,res) =>{

   var data = await product.create(req.body);

   res.status(200).json({
      status:"success",
      data
   })

 }

 /* all category */

 const all_category = async (req,res) =>{

   var data = await product.distinct("category");
   
   res.status(200).json({
      data
   })
 }

 /* view all product */

 const all_product= async(req,res) =>{
    
   var data = await product.find(req.params);

    res.status(200).json({
        status:"success",
        data
    })
 }

 /* view single product */

 const single_product = async (req,res) => {
   var data = await product.find({"id":req.params.id})

   res.status(200).json({
      status:"success",
      data
   })
 }

 /* search product by title and category */

 const search_product = async (req,res) => {
   var data = await product.find({
      "$or":[
         {
            title :{ $regex: req.params.key, $options:'i' }
         },
         { 
            category:{ $regex: req.params.key, $options:'i' }
         }
      ]
   })

   res.status(200).json({
      status:"success",
      data
   })
 }

 /* limit and skip product */

 const set_product = async (req,res) =>{
   var page_no = req.params.page_no;
   var start = (page_no-1)*10;
   var data = await product.find().skip(start).limit(10);

   res.status(200).json({
      status:"success",
      data
   })
 }

 /* get product from category */

 const product_category = async(req,res) =>{
   var data = await product.find({"category":req.params.category});

   res.status(200).json({
      data
   })
 }

 /* update product */

 const update_product = async (req,res) =>{
      var id = req.params.id;
  
      await product.findByIdAndUpdate(id,req.body);
      var data = await product.findByIdAndUpdate(id);
  
      res.status(200).json({
          status:"success",
          data
      })
 }

 /* delete product */

 const delete_product = async(req,res) =>{
   var id = req.params.id;
   var data = await product.findByIdAndDelete(id);
   res.status(200).json({
      status:"success",
      data
   })
 }

 module.exports={
   add_product,
    all_product,
    single_product,
    search_product,
    set_product,
    product_category,
    update_product,
    delete_product,
    all_category
 }