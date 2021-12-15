const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: Number,
    ingredients:Array
});

const Product = mongoose.model('product',productSchema);


module.exports = Product;
