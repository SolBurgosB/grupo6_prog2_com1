var express = require('express');
var router = express.Router();
const indexController= require("../controllers/indexController") //requerir el controller

/* GET home page. */
router.get('/', indexController.index); //definir/crear una ruta


module.exports = router; //exportar el archivo

//home