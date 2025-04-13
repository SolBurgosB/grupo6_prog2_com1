const index= require("../db/index");
const productController= {
    product: function(req, res) {
      res.render('product', {listado: index.products.comments});
    },
    add: function(req, res) {
      res.render("product-add")
    },
    id: function(req, res) {
      return res.render("product", {listado: index.id(req.params.id)})
      },
    search: function(req, res) {
      let product=req.params.products
      if (product != undefined) {
          return res.render("search-results", {listado: index.search(product.productname)})
      } else {
          return res.render("search-results")
      }
  } 
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;