const db= require("../database/models");
const maquillaje= db.Product
const comentarios= db.Comment
let op=db.Sequelize.Op
let relacion= {
            include: [
              {association: "comments",
                include: {association: "user"}
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
        res.render('product-add');
      }},

    addProduct: function(req, res){
              let form=req.body;
              //guardar el usuario, traerlo del formulario de register al controlador
              let producto={
                  productimage: form.productimage, //esto viene del modelo
                  productname: form.productname,
                  productdescription: form.productdescription,
                  userid: req.session.user.id,
                  createdAt: new Date(), //VER como hacer y si no va en el create
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
              //guardar el usuario, traerlo del formulario de register al controlador
              let comentario={
                  commenttext: form.productcomment, //esto viene del modelo
                  userid: req.session.user.id,
                  productid: req.params.id,
                  createdAt: new Date(), //VER como hacer y si no va en el create
              }
              db.Comment.create(comentario)
                  .then(function(resultados) {
                      return res.redirect('/')
                  })
                  .catch(function(error) {
                      return res.send(error)
                  })     
          }
        },
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
        db.Product.findByPk(req.params.id, relacion)        
            .then(function (resultados) {
              return res.render("product", {listado: resultados}) //NO USAMOS REDIRECT PORQUE NO ES UN FORMULARIO
            })
            .catch(function(error){
                return res.send(error)
            })
        },

    search: function(req, res){
      //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.
      db.Product.findAll({where: [{productname: { [op.like]: "%" + req.query.search + "%" }}]})       
          .then(function (resultados) {
              return res.render("search-results", {listado: resultados, producto: req.query.search})
          })
          .catch(function(error){
              return res.send(error)
          })
    },
  } //para que se renderice (que aparezca) la vista index
module.exports=productController;