const index = require('../db/index');
const usersController={
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        res.render('profile', {listado: index.usuario});
    },
    profileedit: function(req, res) {
        res.render('profile-edit', {listado: index.usuario});
    },
}

module.exports = usersController;