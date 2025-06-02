const { search } = require("../routes");
const db= require("../database/models");

const indexController= {
  index: function(req, res) {
    
      let relacion={
        include: [{
          association: "comments",
        include: [{association: "user"}]},
        {association: "user",
        include: [{association: "comments"}]}
        ]}
        
        db.Product.findAll(relacion)
            .then(function(resultados){
                return res.render("index", {listado: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    }
  }

 
module.exports=indexController; 