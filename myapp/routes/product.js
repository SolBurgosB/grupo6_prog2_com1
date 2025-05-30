const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController") //requerimos el controller

router.get("/", productController.product) //definimos/creamos la ruta
router.get("/product-add", productController.add)
router.get("/id/:id", productController.id)
router.get("/search-results/:product?", productController.search)
router.post("/addProduct", productController.addProduct)
router.post("/:id/comment", productController.addComment)

module.exports=router; //exportamos el archivo