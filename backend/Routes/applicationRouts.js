const express = require("express");
const authMiddleware = require("../middlware/authMiddleware");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplicationByEmail,
  updateApplicationByEmail,
  deleteApplication,
} = require("../Controllers/ApplicationController");

// Route to create a new student application
router.post("/applications/register",authMiddleware, createApplication);

// Route to get all student applications
router.get("/applications", getApplications);

// Route to get a single application by ID
router.get("/applications/student",authMiddleware, getApplicationByEmail);

// Route to update a student application
router.put("/applications/update/student",authMiddleware, updateApplicationByEmail);

// Route to delete a student application
router.delete("/applications/:id", deleteApplication);

module.exports = router;
