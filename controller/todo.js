const todos = require('../moduler/todo');

const add_todo = async(req,res) =>{
    var userId = req.params.userId;
    await todos.create(req.body);
    var data = await todos.find(req.body);
    var id = data[0]._id;
    await todos.findByIdAndUpdate(id, {"userId": userId});
    await todos.findByIdAndUpdate(id);
    var data = await todos.findByIdAndUpdate(id);

    res.status(200).json({
        data
    })
}

/* get all todos of user */

const all_todo = async(req,res) =>{
    var userId= req.params.userId;

    var data= await todos.find({"userId":userId})

    res.status(200).json({
        data
    })
}

/* get a single todo */

const single_todo = async(req,res) =>{
    var userId = req.params.userId;

    var data = await todos.find({"userId":userId,"id":req.params.id})

    res.status(200).json({
        data
    })
}

/* limit & skip todo of user */

const set_todo = async(req,res) =>{
    var userId = req.params.userId;
    var page_no = req.params.page_no;
    var start = (page_no-1)*3;
    var data = await todos.find({"userId":userId}).skip(start).limit(3);

    res.status(200).json({
        data
    })
}

/* update todo of user */

const update_todo = async (req,res) =>{
    var id = req.params.id;
    var userId = req.params.userId;

    await todos.findByIdAndUpdate({"userId":userId,"_id":id},req.body);
    await todos.findByIdAndUpdate({"userId":userId,"_id":id});
    var data = await todos.findByIdAndUpdate({"userId":userId, "_id":id});

    res.status(200).json({
        data
    })
}

/* delete todo of user */

const delete_todo = async(req,res) =>{
    var id = req.params.id;
    var userId = req.params.userId;
    var data = await todos.findByIdAndDelete({"userId":userId,"_id":id});
    res.status(200).json({
       data
    })
  }

module.exports={
    add_todo,
    all_todo,
    single_todo,
    set_todo,
    update_todo,
    delete_todo
}