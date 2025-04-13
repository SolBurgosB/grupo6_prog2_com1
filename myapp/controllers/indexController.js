const { search } = require("../routes");
const index= require("../db/index");

const indexController= {
  index: function(req, res) {
    res.render('index', {listado: index.products.lista});
  }
} //para que se renderice (que aparezca) la vista index 
module.exports=indexController;