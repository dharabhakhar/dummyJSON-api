const mongoose = require('mongoose');

const todo_data = new mongoose.Schema({
    id:{type:String},
    todo:{type:String},
    completed:{type:Boolean,default:false},
    userId:{type:String}
  });

  const todos = mongoose.model('todo_list', todo_data);

  module.exports = todos;