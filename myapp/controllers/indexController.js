const { search } = require("../routes");

const indexController= {
  index: function(req, res) {
    res.render('index');
  },
  search: function(req, res) {
    res.render('search-results', req.params.producto); //completar
  },
} //para que se renderice (que aparezca) la vista index 
module.exports=indexController;