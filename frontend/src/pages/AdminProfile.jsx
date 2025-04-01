import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserCircle, Mail, Phone, Briefcase, LogOut } from "lucide-react"; // Added icons

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get("adminToken");
        if (!token) {
          setError("Unauthorized! Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/admin/admin/profile", {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        });

        setAdmin(response.data);
      } catch (err) {
        setError("Failed to load profile. Please try again." + err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin Profile</h2>

        {error && <div className="text-red-500 text-center">{error}</div>}

        {admin ? (
          <div className="flex flex-col items-center">
            <UserCircle className="w-28 h-28 text-gray-500" /> {/* Common User Icon */}
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{admin.name}</h3>

            <div className="w-full mt-4 space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>{admin.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-green-500" />
                <span>{admin.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Briefcase className="w-5 h-5 text-orange-500" />
                <span>{admin.department}</span>
              </div>
            </div>

            <button
              className="mt-6 flex items-center gap-2 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg"
              onClick={() => {
                Cookies.remove("adminToken");
                navigate("/");
              }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
