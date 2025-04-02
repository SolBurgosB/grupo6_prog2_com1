const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController") //requerimos el controller

router.get("/", productController.product) //definimos/creamos la ruta
router.get("/product-add", productController.add)

module.exports=router; //exportamos el archivo