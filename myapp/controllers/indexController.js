const { search } = require("../routes");
const maquillaje= require("../db/index");

const indexController= {
  index: function(req, res) {
    res.render('index', {listado: maquillaje.products.lista});
  }
} //para que se renderice (que aparezca) la vista index 
module.exports=indexController;