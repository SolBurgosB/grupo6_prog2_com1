const db= require("../database/models");
const maquillaje= db.Product
const comentarios= db.Comment
let op=db.Sequelize.Op
let relacion= {
            include: [
              {association: "comments",
                include: {association: "users"}
              }]}

const productController= {
    product: function(req, res) {
      Product.findAll(relacion)
            .then(function(resultados){
                return res.render("product", {listado: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    },

    add: function(req, res) {
      if(req.session.user == undefined ){
        return res.redirect('/')
      } else {
        res.render('profile-edit', {listado: maquillaje.usuario});
      }},

    //VERRRR
    /*searchid: function (idBuscado) {
      const nuevoId = [];
      for (let i = 0; i < maquillaje.products.lista.length; i++) {
          const cadaId = maquillaje.products.lista[i];
      if (idBuscado==cadaId.id) {
          nuevoId.push(cadaId)
      }}
      return nuevoId},*/

    id: function(req, res){
        //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.
        db.Product.findByPk(req.params.id)        
            .then(function (resultados) {
                return res.render("product", {listado: resultados})
            })
            .catch(function(error){
                return res.send(error)
            })
        },

    search: function(req, res){
      //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.
      db.Product.findAll({where: [{productname: { [op.like]: "%" + req.query.search + "%" }}]})       
          .then(function (resultados) {
              return res.render("search-results", {listado: resultados})
          })
          .catch(function(error){
              return res.send(error)
          })
    },
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;