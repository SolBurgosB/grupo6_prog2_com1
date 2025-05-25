const db= require("../database/models");
let bcryptjs= require("bcryptjs")
const maquillaje= db.Product
const comentarios= db.Comment
const usuarios= db.User

const usersController={
    login: function(req, res) {
        if (req.session.user !=undefined) {
            return res.redirect("/")
        }
        else{
            return res.render("login")
        }
    },

    register: function(req, res) {
        if (req.session.user !=undefined) {
            return res.redirect("/profile")
        }
        else{
            return res.render("register")
        }
    },
    create: function(req, res){
        let form=req.body;
        
        //guardar el usuario
        let usuario={
            name: form.username, //esto viene del modelo
            email: form.email,
            password: bcryptjs.hashSync(form.password, 10),
        }
        db.User.create(usuario)
            .then(function(results) {
                return res.redirect("/")
            })
            .catch(function(error) {
                return res.send(error)
            })
        
    },
    createLogin: function(req, res) {
        let userInfo = {
            email: req.body.email,
            password:  req.body.password,
            recordarme:  req.body.recordarme
        }

        // validar que el mail y la pasword sean correctas
        db.User.findOne({ where: { email: userInfo.email } })       
            .then(function (resultado) {
                if (resultado !=null) {
                    if (bcryptjs.compareSync(userInfo.password, resultado.password)){ 
                        req.session.user = userInfo //poner en session
    
                        // check de recordarme?
                        if (userInfo.recordarme != undefined) {
                            // como se crea una cookie?
                            res.cookie("user", userInfo, { maxAge: 150000});
                        }
                        res.redirect("/movies")
                        }
                    else{
                        res.render("login")
                    }
                }
                else{
                    res.render("register")
                }})
            .catch(function(error){
                return res.send(error)
            })
    },
    //CAMBIAR PARA QUE FUNCIONE COMO BASE DE DATOS
    profile: function(req, res) {
        res.render('profile', {usuario: maquillaje.usuario, listado: maquillaje.products.lista});
    },
    profileedit: function(req, res) {
        res.render('profile-edit', {listado: maquillaje.usuario});
    },
}

module.exports = usersController;