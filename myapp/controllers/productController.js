const index= require("../db/index");
const productController= {
    product: function(req, res) {
      res.render('product', {listado: index.products});
    },
    add: function(req, res) {
      res.render("product-add", {listado: index.usuario})
    },
    searchid: function (idBuscado) {
      const nuevoId = [];
      for (let i = 0; i < index.products.lista.length; i++) {
          const cadaId = index.products.lista[i];
      if (idBuscado==cadaId.id) {
          nuevoId.push(cadaId)
      }}
      return nuevoId},

    searchresults: function (searchBuscado) {
      const nuevoSearch = [];
      for (let i = 0; i < index.products.lista.length; i++) {
          const cadaSearch = index.products.lista[i];
      if (searchBuscado==cadaSearch.productname) {
          nuevoSearch.push(cadaSearch)
      }}
      return nuevoSearch},
    id: function(req, res) {
      return res.render("product", {listado: productController.searchid(req.params.id), comentarios: index.products.comments})
    },
    search: function(req, res) {
      let product=req.query.search;   
      return res.send(product) 
      if (product != undefined) {
         
          return res.render("search-results", {listado: index.search(product)})
      } else {
          return res.render("search-results")
      }
    },
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;