const { search } = require("../routes");
const db= require("../database/models");
const maquillaje= db.Product

const indexController= {
  index: function(req, res) {
    res.render('index', {listado: maquillaje.products.lista});
  }
} //para que se renderice (que aparezca) la vista index 
module.exports=indexController; 