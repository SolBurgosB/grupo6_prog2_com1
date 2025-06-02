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
        if (form.email==""|| form.email==undefined) {
            return res.render("register", {error: "Por favor revise el email"}) 
        } 

        if (form.userpassword.length<3 || form.userpassword==""|| form.userpassword==undefined) {
            return res.render("register", {error: "Por favor revise la contraseña"})}
        
        db.User.findOne({where: {email: form.email }})
        .then(function (resultado) {
            if (resultado!=null) {
                return res.render("register", {error: "El email ya está registrado"})};
             
            let usuario={
                username: form.username, 
                email: form.email,
                userpassword: bcryptjs.hashSync(form.userpassword, 10),
                birthday: form.birthday,
                dni: form.dni,
                profileimage: form.profileimage,
            };
            
            db.User.create(usuario)
                .then(function(results) {
                    return res.redirect("/users/login")
                })
                .catch(function(error) {
                    return res.send(error)
                });
            })
        .catch(function(error){
            return res.send(error)
        });},
        
    createLogin: function(req, res) {
        let userInfo = {
            email: req.body.email,
            userpassword:  req.body.userpassword,
            recordarme:  req.body.recordarme,
        }

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
                    
                        if (userInfo.recordarme != undefined) {
                            
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
             db.User.findByPk(req.session.user.id) 
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