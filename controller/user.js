var userdata = require('../moduler/user');
var jwt = require('jsonwebtoken');

/* Add user */

const add_user = async (req,res) =>{

    var data = await userdata.create(req.body);
 
    res.status(200).json({
       status:"success",
       data
    })
}

 /* view all user */

 const all_user= async(req,res) =>{
    
    var data = await userdata.find(req.params);
 
     res.status(200).json({
         status:"success",
         data
     })
}

 /* view single user */

 const single_user = async (req,res) => {
    var data = await userdata.find({"id":req.params.id})
 
    res.status(200).json({
       status:"success",
       data
    })
  }

  /* search user by firstname and lastname */

 const search_user = async (req,res) => {
    var data = await userdata.find({
       "$or":[
          {
             firstname :{ $regex: req.params.key }
          },
          { 
             lastname:{ $regex: req.params.key }
          }
       ]
    })
 
    res.status(200).json({
       status:"success",
       data
    })
  }

  /* limit and skip user */

 const set_user = async (req,res) =>{
    var page_no = req.params.page_no;
    var start = (page_no-1)*5;
    var data = await userdata.find().skip(start).limit(5);
 
    res.status(200).json({
       status:"success",
       data
    })
  }

   /* update user */

 const update_user = async (req,res) =>{
    var id = req.params.id;

    await userdata.findByIdAndUpdate(id,req.body);
    var data = await userdata.findByIdAndUpdate(id);

    res.status(200).json({
        status:"success",
        data
    })
}

/* delete user */

const delete_user = async(req,res) =>{
 var id = req.params.id;
 var data = await userdata.findByIdAndDelete(id);
 res.status(200).json({
    status:"success",
    data
 })
}

module.exports={
    add_user,
    all_user,
    single_user,
    search_user,
    set_user,
    update_user,
    delete_user
}