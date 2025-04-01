const express = require("express");
const authMiddleware = require("../middlware/authMiddleware");
const { registerStudent, loginStudent, getProfile} = require("../Controllers/StudentController");

const router = express.Router();

// Student Register Route
router.post("/register", registerStudent);

// Student Login Route
router.post("/login", loginStudent);

router.get("/students/profile", authMiddleware, getProfile);



module.exports = router;
