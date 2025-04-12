const index= require("../db/index");
const productController= {
    product: function(req, res) {
      res.render('product');
    },
    add: function(req, res) {
      res.render("product-add")
    },
    id: function(req, res) {
      return res.render("product", {listado: index.id(req.params.id)})
      },
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;