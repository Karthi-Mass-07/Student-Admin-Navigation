const ApplicationModel = require("../Models/ApplicationModel");

// Create a new student application
const createApplication = async (req, res) => {
    try {
      // 🔹 Ensure user details exist in JWT
      if (!req.user || !req.user.email) {
        console.log("❌ No email found in JWT token");
        return res.status(401).json({ message: "Unauthorized: Email not found in token" });
      }
  
      // 🔹 Extract email from JWT
      const userEmail = req.user.email;
      console.log("📧 Email Extracted from JWT:", userEmail);
  
      // 🔹 Assign email from JWT to the new application
      const newApplication = new ApplicationModel({
        ...req.body, // Spread form data
        email: userEmail, // ✅ Ensure email is taken from JWT
      });
  
      // 🔹 Save to database
      await newApplication.save();
      console.log("✅ Application Created Successfully:", newApplication);
  
      res.status(201).json({ message: "Application created successfully", data: newApplication });
    } catch (error) {
      console.error("❌ Application Creation Error:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  

// Get all student applications
const getApplications = async (req, res) => {
  try {
    const applications = await ApplicationModel.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Application by Email from JWT Token
const getApplicationByEmail = async (req, res) => {
  try {
    const user = await ApplicationModel.findOne({ email: req.user.email }).select("-password");
    
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Data Fetch Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Application by JWT Email
const updateApplicationByEmail = async (req, res) => {
  try {
    const user = await ApplicationModel.findOneAndUpdate(
      { email: req.user.email }, // Find by JWT email
      req.body,
      { new: true, runValidators: true }
    ).select("-password"); // Exclude password from response

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Application updated successfully", data: user });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};


// Delete a student application
const deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await ApplicationModel.findByIdAndDelete(req.params.id);
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationByEmail,
  updateApplicationByEmail,
  deleteApplication,
};
