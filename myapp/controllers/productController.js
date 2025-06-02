const db= require("../database/models");
const maquillaje= db.Product
const comentarios= db.Comment
let op=db.Sequelize.Op

let relacion= {
            include: [
              {association: "comments",
                include: {association: "user"}
              }]};

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
        res.render('product-add');
      }},

    addProduct: function(req, res){
              let form=req.body;
              
              let producto={
                  productimage: form.productimage, 
                  productname: form.productname,
                  productdescription: form.productdescription,
                  userid: req.session.user.id,
              }
              db.Product.create(producto)
                  .then(function(resultados) {
                      return res.redirect("/product/product-add")
                  })
                  .catch(function(error) {
                      return res.send(error)
                  })     
          },
    addComment: function(req, res){
      if(req.session.user == undefined ){
        return res.redirect('/users/login')
      } 
      else {
        let form=req.body;
              
              let comentario={
                  commenttext: form.productcomment, 
                  userid: req.session.user.id,
                  productid: req.params.id,
              }
              db.Comment.create(comentario)
                  .then(function(resultados) {
                      return res.redirect("/")
                  })
                  .catch(function(error) {
                      return res.send(error)
                  })     
          }
        },
    

    id: function(req, res){
        db.Product.findByPk(req.params.id, relacion)        
            .then(function (resultados) {
              return res.render("product", {listado: resultados}) //NO USAMOS REDIRECT PORQUE NO ES UN FORMULARIO
            })
            .catch(function(error){
                return res.send(error)
            })
        },

    search: function(req, res){
      db.Product.findAll({where: {productname: { [op.like]: "%" + req.query.search + "%" }
    },
    include: [{ association: "user" }]
  })
          .then(function (resultados) {
              return res.render("search-results", {listado: resultados, producto: req.query.search})
          })
          .catch(function(error){
              return res.send(error)
          })
    },
  } 
module.exports=productController;