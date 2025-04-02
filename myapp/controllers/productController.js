const productController= {
    product: function(req, res) {
      res.render('product');
    },
    add: function(req, res) {
      res.render("product-add")
    }} //para que se renderice (que aparezca) la vista index
module.exports=productController;