const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    ratings: String,
    image: String
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;