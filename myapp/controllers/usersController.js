const maquillaje = require('../db/index');
const usersController={
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        res.render('profile', {usuario: maquillaje.usuario, listado: maquillaje.products.lista});
    },
    profileedit: function(req, res) {
        res.render('profile-edit', {listado: maquillaje.usuario});
    },
}

module.exports = usersController;