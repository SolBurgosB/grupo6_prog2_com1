const express = require('express');
const router = express.Router();

router.get('/login', usersController.login);
router.get("/register", usersController.register);

module.exports = router;

//login y register