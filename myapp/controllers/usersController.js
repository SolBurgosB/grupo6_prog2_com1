const db= require("../database/models");
let bcryptjs= require("bcryptjs");
const comments = require("../database/models/comments");
const maquillaje= db.Product
const comentarios= db.Comment
const usuarios= db.User
let op=db.Sequelize.Op

const usersController={
    login: function(req, res) {
        if (req.session.user !=undefined) {
            return res.redirect("/profile")
        }
        else{
            return res.render("login", {error: null})
        }
    },
    register: function(req, res) {
        if (req.session.user !=undefined) {
            return res.redirect("/profile")
        }
        else{
            return res.render("register", {error: null})
        }
    },
    create: function(req, res){
        let form=req.body;
        
        //guardar el usuario, traerlo del formulario de register al controlador
        let usuario={
            username: form.username, //esto viene del modelo
            email: form.email,
            userpassword: bcryptjs.hashSync(form.userpassword, 10),
            birthday: form.birthday,
            dni: form.dni,
            profileimage: form.profileimage,
        }

        if (form.email==""|| form.email==undefined) {
            return res.render("register", {error: "Por favor revise el email"}) //aca usamos render para poder mostrar el error. ESTA BIEN???????
        } 
         //VER si agregar then y catch, mostrar error en la vista

        db.User.findOne({where: {email: form.email }})
        .then(function (resultado) {
            if (resultado!=null) {
                return res.render("register", {error: "El email ya está registrado"})}
            }) //MOSTRAR ERROR
        .catch(function(error){
            return res.send(error)
        })
        //nunca más usar render para POST, usar redirect
         //VER si agregar then y catch, mostrar error en la vista
        if (form.userpassword.length<3 || form.userpassword==""|| form.userpassword==undefined) {
            return res.render("register", {error: "Por favor revise la contraseña"})}
        
        db.User.create(usuario)
            .then(function(results) {
                return res.redirect("/users/login")
            })
            .catch(function(error) {
                return res.send(error)
            })
    },
    createLogin: function(req, res) {
        let userInfo = {
            email: req.body.email,
            userpassword:  req.body.userpassword,
            recordarme:  req.body.recordarme,
        }

        // validar que el mail y la pasword sean correctas
        db.User.findOne({ where: { email: userInfo.email } })       
            .then(function (resultado) {
                if (resultado !=null) {
                    if (bcryptjs.compareSync(userInfo.userpassword, resultado.userpassword)){ 
                        req.session.user = {
                        id: resultado.id,
                        email: resultado.email,
                        username: resultado.username,
                        profileimage: resultado.profileimage
                    }
                    
    
                        // check de recordarme?
                        if (userInfo.recordarme != undefined) {
                            // como se crea una cookie?
                            res.cookie("user", req.session.user, { maxAge: 150000});
                        }
                        res.redirect("/")
                        }
                    else{
                        res.render("login", {error: "Por favor revise los datos ingresados"})
                    }
                }
                else{
                    res.render("register", {error: null})
                }})
            .catch(function(error){
                return res.send(error)
            })
    },
    //CAMBIAR PARA QUE FUNCIONE COMO BASE DE DATOS
    /*profile: function(req, res) {
        db.User.findOne({ where: {email: req.session.user.email}}, relacion)
            .then(function(resultados){
                return res.render("profile", {usuario: resultados, listado: resultados.products, comentarios: resultados.comments});
            })
            .catch(function(error){
                return res.send(error);
            })
    },*/
    profile: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        let relacion={
            include: [{
              association: "comments",
            include: [{association: "user"}]},
            {association: "user",
            include: [{association: "comments"}]}
            ]}
        db.Product.findAll({where: {userid: req.session.user.id }}, relacion)

            .then(function (resultados) {
                return res.render('profile', {
                    usuario: req.session.user,
                    productos: resultados,
                });
            })
             .catch(function(error){
                return res.send(error);
            })
        },
    profilecreador: function (req, res) {
        let relacion={
            include: [{
              association: "products"}]}
        db.User.findByPk(req.params.id, relacion)
            .then(function (resultados) {
                
                return res.render('profile', {
                    usuario: resultados,
                    productos: resultados.products,
                });
            })
             .catch(function(error){
                return res.send(error);
            })
    },
    profileedit: function(req, res) {
        if (req.session.user ==undefined) {
            return res.redirect("/users/login")
        }
        else{
             db.User.findByPk(req.session.user.id) // traer el usuario completo desde la base
            .then(function(resultados) {
                res.render('profile-edit', { usuario: resultados });
            })
            .catch(function(error) {
                res.send(error);
            });
        }
    },
       
    logout: function(req, res) {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = usersController;