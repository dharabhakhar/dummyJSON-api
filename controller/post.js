const post = require('../moduler/post');

const add_post = async (req, res) => {
    var userId = req.params.id;
    await post.create(req.body);
    var data = await post.find(req.body);
    var id = data[0]._id;
    await post.findByIdAndUpdate(id, { "userId": userId });
    await post.findByIdAndUpdate(id);
    var data = await post.findByIdAndUpdate(id);

    res.status(200).json({
        data
    })
}

/* get all post of user by userId */

const all_post = async (req, res) => {

    var userId = req.params.userId;

    var data = await post.find({ "userId": userId });

    res.status(200).json({
        status: "suceess",
        data
    })
}

/* get single post of userid */

const single_post = async (req, res) => {
    var userId = req.params.userId;
    var data = await post.find({ "userId": userId, "id": req.params.id })

    res.status(200).json({
        data
    })
}

/* search post by title of user */

const search_post = async (req, res) => {
    var data = await post.find({
        "userId": req.params.userId,
        "$or": [
            {
                title: { $regex: req.params.key }
            }
        ]
    })

    res.status(200).json({
        data
    })
}

/* limit & skip post of user */

const set_post = async (req, res) => {
    var page_no = req.params.page_no;
    var start = (page_no - 1) * 10;
    var data = await post.find({"userId":req.params.userId}).skip(start).limit(10);

    res.status(200).json({
        data
    })
}

/* update post of user */

const update_post = async (req,res) =>{
    var userId = req.params.userId
    var id = req.params.id;

    await post.findByIdAndUpdate({"userId":userId,"_id":id},req.body);
    await post.findByIdAndUpdate({"userId":userId,"_id":id});
    var data = await post.findByIdAndUpdate({"userId":userId,"_id":id});

    res.status(200).json({
        data
    })
}

/* delete post of user */

const delete_post = async(req,res) =>{
    var id = req.params.id;
    var userId = req.params.userId;
    var data = await post.findByIdAndDelete({"userId":userId,"_id":id});
    res.status(200).json({
       data
    })
  }

module.exports = {
    add_post,
    all_post,
    single_post,
    search_post,
    set_post,
    update_post,
    delete_post
}