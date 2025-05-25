const { search } = require("../routes");
const db= require("../database/models");
const maquillaje= db.Product

const indexController= {
  index: function(req, res) {
    //res.render('index', {listado: maquillaje.products.lista});
    let relacion= {
            include: [{association: "product"}] //VER ASSOCIATION
        }
        Product.findAll(relacion)
            .then(function(resultados){
                return res.render("index", {listado: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    }
  }

//para que se renderice (que aparezca) la vista index 
module.exports=indexController; 