const express = require("express");
const { checkAuth, logout } = require("../Controllers/AuthController");

const router = express.Router();

router.get("/check-auth", checkAuth);  
router.post("/logout", logout);        

module.exports = router;
