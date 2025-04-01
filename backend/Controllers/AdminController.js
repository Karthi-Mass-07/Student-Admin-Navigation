const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/AdminModel");

// Admin Register Controller
const registerAdmin = async (req, res) => {
  const { name, email, password, phone, department } = req.body;

  try {
    // Check if the admin already exists
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const admin = new AdminModel({
      name,
      email,
      password: hashedPassword,
      phone,
      department,
    });

    await admin.save();
    res.status(201).json({ success: true, message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Admin Login Controller
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set cookie options
    res.cookie("adminToken", token, {
      httpOnly: false, // Prevents client-side JS from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "None", // Protects against CSRF attacks
      maxAge: 3600000, // Cookie expires in 1 hour
    });

    res.status(200).json({ success: true, message: "Login successful", token, user: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// 📌 Get Admin Profile (Protected Route)
const getProfile = async (req, res) => {
  try {
    const user = await AdminModel.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};


// Export both functions
module.exports = { registerAdmin, loginAdmin, getProfile};
