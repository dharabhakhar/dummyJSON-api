const mongoose = require('mongoose');

const user_model = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
  });

  const usermodel = mongoose.model('user', user_model);

  module.exports = usermodel