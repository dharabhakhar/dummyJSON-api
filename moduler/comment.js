const mongoose = require('mongoose');

const cmt_data = new mongoose.Schema({
    id:{type:String},
    body:{type:String},
    postId:{type:String},
    userId:{type:String}
  });

  const cmt = mongoose.model('comment', cmt_data);

  module.exports = cmt