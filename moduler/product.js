const mongoose = require('mongoose');

const user_product = new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String},
    discountPercentage:{type:String},
    rating:{type:String},
    stock:{type:String},
    brand:{type:String},
    category:{type:String}
  });

  const product = mongoose.model('product', user_product);

  module.exports = product;