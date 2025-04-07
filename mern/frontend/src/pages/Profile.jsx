import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserCircle, Mail, Phone, Calendar, Users, Droplet, MapPin, Briefcase, Hash, Flag, Clock, Activity, Edit, LogOut } from "lucide-react";

const Profile = () => {
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get("studentToken");
        if (!token) {
          setError("Unauthorized! Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/student/students/profile", {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        });

        setStudent(response.data);
      } catch (err) {
        setError("Please Register First........................... " + err.response?.data?.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Student Profile</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {student ? (
          <div className="flex flex-col items-center text-center">
            <UserCircle className="w-28 h-28 text-gray-500" />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{student.name}</h3>

            <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600"><Mail className="w-5 h-5 text-blue-500" /><span>{student.email}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Phone className="w-5 h-5 text-green-500" /><span>{student.phoneNumber}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Calendar className="w-5 h-5 text-purple-500" /><span>{new Date(student.dateOfBirth).toDateString()}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Users className="w-5 h-5 text-gray-500" /><span>{student.gender}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Users className="w-5 h-5 text-gray-500" /><span>Father: {student.fatherName}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Users className="w-5 h-5 text-gray-500" /><span>Mother: {student.motherName}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Droplet className="w-5 h-5 text-red-500" /><span>{student.bloodGroup}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-5 h-5 text-orange-500" /><span>{student.address}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Briefcase className="w-5 h-5 text-orange-500" /><span>{student.department}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Hash className="w-5 h-5 text-gray-500" /><span>{student.rollNumber}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Flag className="w-5 h-5 text-red-500" /><span>{student.nationality}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Clock className="w-5 h-5 text-blue-500" /><span>Admission Year: {student.admissionYear}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Phone className="w-5 h-5 text-green-500" /><span>Guardian: {student.guardianContact}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Phone className="w-5 h-5 text-red-500" /><span>Emergency: {student.emergencyContact}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Briefcase className="w-5 h-5 text-purple-500" /><span>Previous School: {student.previousSchool}</span></div>
              <div className="flex items-center gap-2 text-gray-600"><Activity className="w-5 h-5 text-yellow-500" /><span>{student.extracurricularActivities}</span></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="flex items-center gap-2 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                onClick={() => navigate("/update")}
              >
                <Edit className="w-5 h-5" />
                Update Profile
              </button>
              <button
                className="flex items-center gap-2 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg"
                onClick={() => {
                  Cookies.remove("studentToken");
                  navigate("/");
                }}
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
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

export default Profile;
