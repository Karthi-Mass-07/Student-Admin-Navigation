import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import StudentNavBar from "./Components/StudentNavBar";
import AdminNavBar from "./Components/AdminNavBar";
import UserSelection from "./components/UserSelection";
import AdminLogin from "./pages/AdminLogin";
import AdminReg from "./pages/AdminReg";
import StudentLogin from "./pages/StudentLogin";
import StudentReg from "./pages/StudentReg";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Contact  from "./pages/Contact";
import About from "./pages/About"
import Profile from "./pages/Profile"
import AdminProfile from "./pages/AdminProfile"
import UpdateStudent from "./pages/UpdateStudent"

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const studentToken = Cookies.get("studentToken");
  const adminToken = Cookies.get("adminToken");

  if (role === "student" && !studentToken) return <Navigate to="/studentLogin" replace />;
  if (role === "admin" && !adminToken) return <Navigate to="/adminLogin" replace />;
  
  return children;
};

const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const studentToken = Cookies.get("studentToken");
      const adminToken = Cookies.get("adminToken");

      if (studentToken) setUserType("student");
      else if (adminToken) setUserType("admin");
      else setUserType(null);
    };

    checkAuth();

    // Check for authentication every second in case cookies change
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userType) {
      // Prevent Back Navigation to Login after login success
      window.history.replaceState(null, "", `/${userType}-dashboard`);
    }
  }, [userType]);

  // Logout Function
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });

      Cookies.remove("studentToken");
      Cookies.remove("adminToken");
      setUserType(null);

      window.location.href = "/";
    } catch (error) {
      console.error("Logout Error:", error.response?.data || error.message);
    }
  };

  return (
    <Router>

      <ToastContainer position="top-center" autoClose={3000} />
      {/* Show Navbar based on userType */}
      {userType === "student" && <StudentNavBar handleLogout={handleLogout} />}
      {userType === "admin" && <AdminNavBar handleLogout={handleLogout} />}

      <Routes>
        {/* Redirect if logged in */}
        <Route path="/" element={userType ? <Navigate to={`/${userType}-dashboard`} replace /> : <UserSelection />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/update" element={<UpdateStudent />} />

      

        {/* Authentication Routes */}
        {!userType && (
          <>
            <Route path="/studentLogin" element={<StudentLogin setUserType={setUserType} />} />
            <Route path="/studentRegister" element={<StudentReg />} />
            <Route path="/adminLogin" element={<AdminLogin setUserType={setUserType} />} />
            <Route path="/adminRegister" element={<AdminReg />} />
          </>
        )}

        {/* Student Protected Route */}
        <Route path="/student-dashboard" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />

        {/* Admin Protected Route */}
        <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {userType && <Footer />}
    </Router>
  );
};

export default App;
