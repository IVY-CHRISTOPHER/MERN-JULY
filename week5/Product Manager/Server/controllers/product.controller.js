const Product = require('../models/product.model');

module.exports.index = (req,res) => {
    res.json({
        message: 'Index Page, please use api/products for all products.'
    });
}

module.exports.findAllProducts = (res) => {
    productRoutes.find()
        .then((allProducts) => {
            res.json({product: allProducts})
        }).catch((err) => {
            res.json({message: "Something went wrong getting all products", error: err})
        });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch(err => {
            res.json({message: 'Something went wrong creating a new Product', error: err})
        });
}