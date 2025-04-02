var express = require('express');
var router = express.Router();
const indexController= require("../controllers/indexController") //requerir el controller

/* GET home page. */
router.get('/', indexController.index); //definir/crear una ruta
router.get('/search-results/:producto', indexController.search); //ver

module.exports = router; //exportar el archivo

//home