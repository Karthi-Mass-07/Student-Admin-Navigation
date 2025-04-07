const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const StudentModel = require("../Models/StudentModel");
const ApplicationModel=require("../Models/ApplicationModel")

// 📌 Register Student
const registerStudent = async (req, res) => {
  const { name, email, password, phoneNumber, department } = req.body;

  try {
    // Check if the student already exists
    const existingStudent = await StudentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: "Student already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new student
    const student = new StudentModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber, // ✅ Fixed field name
      department,
    });

    await student.save();
    res.status(201).json({ success: true, message: "Student registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// 📌 Student Login Controller with Cookies
const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await StudentModel.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Include email in the JWT payload
    const token = jwt.sign(
      { id: student._id, email: student.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    // Set Cookie
    res.cookie("studentToken", token, {
      httpOnly: false,  // Consider setting this to `true` for security
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 3600000,
    });

    res.status(200).json({ success: true, message: "Login successful", token, user: student });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


// 📌 Get Student Profile (Protected Route)
const getProfile = async (req, res) => {
  try {
    const user = await ApplicationModel.findOne({ email: req.user.email }).select("-password");
    
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Profile Fetch Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = {
  registerStudent,
  loginStudent,
  getProfile,
};
