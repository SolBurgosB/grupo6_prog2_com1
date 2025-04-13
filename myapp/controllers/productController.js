const index= require("../db/index");
const productController= {
    product: function(req, res) {
      res.render('product', {listado: index.products});
    },
    add: function(req, res) {
      res.render("product-add", {listado: index.usuario})
    },
    id: function(req, res) {
      return res.render("product", {listado: index.id(req.params.id), comentarios: index.products.comments})
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