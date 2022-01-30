const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const fs = require("fs");
const { validationResult } = require("express-validator");
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const productsController = {
  productCart: (req, res) => res.render("productCart"),
  //productDetail: (req, res) => res.render('productDetail'),

  products: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("products", { products: products });
    });
  },
  //  res.render('products', {products: products}),

  productCreate: function (req, res) {
    let promProduct_category = db.Product_category.findAll();

    Promise.all([promProduct_category])
      .then(([allProduct_category]) => {
        return res.render("productCreate", { allProduct_category });
      })
      .catch((error) => res.send(error));
  },

  newProduct: function (req, res) {
    db.Product.create({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_category: req.body.product_category,
      product_description: req.body.product_description,
      product_image: req.file ? req.file.filename : "img/default.png",
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  productName: (req, res) => {
    let productId = req.params.id;
    let promProduct = db.Product.findByPk(productId, {
      include: ["product_categories"],
    });
    let promProduct_category = db.Product_category.findAll();
    Promise.all([promProduct, promProduct_category])
      .then(([Product, allProduct_category]) => {
        return res.render("productDetail", { Product, allProduct_category,  });
      })
      .catch((error) => res.send(error));
  },

  editProduct: (req, res) => {
    let productId = req.params.id;
    let promProduct = db.Product.findByPk(productId, {
      include: ["product_categories"],
    });
    let promProduct_category = db.Product_category.findAll();
    Promise.all([promProduct, promProduct_category])
      .then(([Product, allProduct_category]) => {
        return res.render("editProduct", { Product, allProduct_category });
      })
      .catch((error) => res.send(error));
  },

  updateProduct: function (req, res) {
    let productId = req.params.id;
    db.Product.update(
      {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_category: req.body.product_category,
        product_description: req.body.product_description,
        product_image: req.file?req.file.filename:'default.png',
      },
      {
        where: { id: productId },
      }
    )
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  deleteProduct: function (req, res) {
    let productId = req.params.id;
    db.Product.destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },
};
module.exports = productsController;
