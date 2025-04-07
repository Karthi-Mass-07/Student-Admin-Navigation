const checkAuth = (req, res) => {
  const adminToken = req.cookies.admintoken;
  const studentToken = req.cookies.studenttoken;

  if (adminToken) {
    return res.json({ userType: "admin" });
  } else if (studentToken) {
    return res.json({ userType: "student" });
  }
  res.json({ userType: "" }); // No valid token
};

const logout = (req, res) => {
  res.clearCookie("admintoken", { path: "/", sameSite: "None", secure: true });
  res.clearCookie("studenttoken", { path: "/", sameSite: "None", secure: true });
  res.json({ message: "Logged out successfully" });
};

module.exports = { checkAuth, logout };
