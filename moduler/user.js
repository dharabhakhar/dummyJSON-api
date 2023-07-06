const mongoose = require('mongoose');

const user_data = new mongoose.Schema({
    id:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    age:{type:String},
    gender:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
  });

  const userdata = mongoose.model('user_data', user_data);

  module.exports = userdata