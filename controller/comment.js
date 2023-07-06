const cmt = require('../moduler/comment');

const add_cmt = async (req,res) =>{
    var userId = req.params.userId;
    var postId = req.params.postId;
    await cmt.create(req.body);
    var data = await cmt.find(req.body);
    var id = data[0]._id;
    await cmt.findByIdAndUpdate(id, { "userId": userId, "postId": postId });
    await cmt.findByIdAndUpdate(id);
    var data = await cmt.findByIdAndUpdate(id);

    res.status(200).json({
        data
    })
}

/* show all comment of post */

const all_cmt = async (req, res) => {

    var userId = req.params.userId;
    var postId = req.params.postId;

    var data = await cmt.find({ "userId": userId, "postId": postId });

    res.status(200).json({
        data
    })
}

/* get single comment of post */

const single_cmt = async (req, res) => {
    var userId = req.params.userId;
    var postId = req.params.postId;
    var data = await cmt.find({ "userId": userId, "postId": postId , "id": req.params.id })

    res.status(200).json({
        data
    })
}

/* limit & skip comment of post */

const set_cmt = async(req,res) =>{
    var page_no = req.params.page_no;
    var start = (page_no-1)*10;
    var data = await cmt.find({"userId":req.params.userId, "postId":req.params.postId}).skip(start).limit(10);

    res.status(200).json({
        data
    })
}

/* update comment of post */

const update_cmt = async (req,res) =>{
    var id = req.params.id;

    await cmt.findByIdAndUpdate({"userId":req.params.userId, "postId":req.params.postId ,"_id":id},req.body);
    await cmt.findByIdAndUpdate({"userId":req.params.userId, "postId":req.params.postId ,"_id":id});
    var data = await cmt.findByIdAndUpdate({"userId":req.params.userId, "postId":req.params.postId ,"_id":id});

    res.status(200).json({
        data
    })
}

/* delete comment of post */

const delete_cmt = async(req,res) =>{
    var id = req.params.id;
    var userId = req.params.userId;
    var postId = req.params.postId;
    var data = await cmt.findByIdAndDelete({"userId":userId, "postId":postId ,"_id":id});
    res.status(200).json({
       data
    })
  }

module.exports={
    add_cmt,
    all_cmt,
    single_cmt,
    set_cmt,
    update_cmt,
    delete_cmt
}