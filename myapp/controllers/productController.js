const maquillaje= require("../db/index");
const productController= {
    product: function(req, res) {
      res.render('product', {listado: maquillaje.products});
    },
    add: function(req, res) {
      res.render("product-add", {listado: maquillaje.usuario})
    },
    searchid: function (idBuscado) {
      const nuevoId = [];
      for (let i = 0; i < maquillaje.products.lista.length; i++) {
          const cadaId = maquillaje.products.lista[i];
      if (idBuscado==cadaId.id) {
          nuevoId.push(cadaId)
      }}
      return nuevoId},
    id: function(req, res) {
      return res.render("product", {listado: productController.searchid(req.params.id), comentarios: maquillaje.products.comments})
    },
    search: function(req, res) {
      let product=req.query.search;   
      return res.render("search-results", {listado: maquillaje.products.lista, producto: product}) 
    },
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;