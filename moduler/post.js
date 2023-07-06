const mongoose = require('mongoose');

const post_data = new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    body:{type:String},
    tags:{type:Array},
    reactions:{type:String},
    userId:{type:String}
  });

  const post = mongoose.model('posts', post_data);

  module.exports = post