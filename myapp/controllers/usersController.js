const db= require("../database/models");
let bcryptjs= require("bcryptjs")
const maquillaje= db.Product
const comentarios= db.Comment
const usuarios= db.User
let op=db.Sequelize.Op
let relacion = {
    include: [
        { association: "products", include: [
            { association: "comments", include: [
                { association: "user" }
            ]}
        ]},
        { association: "comments" }
    ]
}

const usersController={
    login: function(req, res) {
        if (req.session.user !=undefined) {
            return res.redirect("/profile")
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
        
        //guardar el usuario, traerlo del formulario de register al controlador
        let usuario={
            username: form.username, //esto viene del modelo
            email: form.email,
            userpassword: bcryptjs.hashSync(form.userpassword, 10),
            birthday: form.birthday,
            dni: form.dni,
            profileimage: form.profileimage,
            createdAt: "", //VER como hacer y si no va en el create
        }

        if (form.email==""|| form.email==undefined) {
            return res.redirect("/users/register") //nunca más usar render para POST, usar redirect
        } //VER si agregar then y catch, mostrar error en la vista

        db.User.findOne({where: {email: form.email }})
        .then(function (resultado) {
            if (resultado !=null) {
                return res.redirect("/users/register")}}) //MOSTRAR ERROR
        .catch(function(error){
            return res.send(error)
        })

        if (form.userpassword.length<3 || form.userpassword==""|| form.userpassword==undefined) {
            return res.redirect("/users/register") //nunca más usar render para POST, usar redirect
        } //VER si agregar then y catch, mostrar error en la vista
        
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
                    }; //poner en session
    
                        // check de recordarme?
                        if (userInfo.recordarme != undefined) {
                            // como se crea una cookie?
                            res.cookie("user", req.session.user, { maxAge: 150000});
                        }
                        res.redirect("/")
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
        db.User.findOne({ where: {email: req.session.user.email}}, relacion)
            .then(function(resultados){
                return res.render("profile", {usuario: resultados, listado: resultados.products});
            })
            .catch(function(error){
                return res.send(error);
            })
    },
    profileedit: function(req, res) {
        if(req.session.user == undefined ){
            return res.redirect('/')
        } else {
            res.render('profile-edit', {listado: maquillaje.usuario});
        }
    },
    logout: function(req, res) {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = usersController;