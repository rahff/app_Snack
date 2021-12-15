const Product = require("../../database/app1/models/product.model");

module.exports = {
  getAllProduct: () => {
    return Product.find().exec();
  },
  createProduct: (body) => {
    const newProduct = new Product({
      image: body.image,
      name: body.name,
      price: body.price,
      category: body.category,
      ingredients: body.ingredients,
    });
    return newProduct.save();
  },
  getProductById: (id) => {
    return Product.findById(id).exec();
  },
  getProductAndUpdate: (id, body) => {
    return Product.findByIdAndUpdate(id, {
      $set: {
        image: body.image,
        name: body.name,
        price: body.price,
        ingredients: body.ingredients,
      },
    }).exec();
  },
  getProductAndUpdate2: (id, body) => {
    return Product.findByIdAndUpdate(id, {
      $set: {
        name: body.name,
        price: body.price,
        ingredients: body.ingredients,
      },
    }).exec();
  },
  deleteOneById: (id) =>{
      return Product.findByIdAndDelete(id).exec();
  }
};
