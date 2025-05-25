const express = require('express');
const router = express.Router();
const usersController= require("../controllers/usersController");

router.get('/login', usersController.login);
router.get("/register", usersController.register);
router.get("/profile", usersController.profile);
router.get("/profile-edit", usersController.profileedit)

router.post('/newuser/', usersController.create); //Procesa el formulario y guarda los datos en la db.
router.post('/login/', usersController.createLogin);

module.exports = router;

//login y register