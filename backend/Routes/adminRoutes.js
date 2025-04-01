const express = require("express");
const authMiddleware = require("../middlware/authMiddleware");
const { registerAdmin, loginAdmin, getProfile} = require("../Controllers/AdminController");

const router = express.Router();

// Admin Register Route
router.post("/register", registerAdmin);

// Admin Login Route
router.post("/login", loginAdmin);

router.get("/admin/profile", authMiddleware, getProfile);



module.exports = router;
