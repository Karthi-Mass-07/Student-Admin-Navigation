const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.adminToken || req.cookies.studentToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; 
    next();
  } catch (err) {
    console.error("❌ JWT Verification Failed:", err.message);
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
