import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    bloodGroup: "",
    address: "",
    department: "",
    rollNumber: "",
    nationality: "",
    admissionYear: "",
    guardianContact: "",
    emergencyContact: "",
    previousSchool: "",
    extracurricularActivities: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch student details using JWT token
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = Cookies.get("studentToken");
        if (!token) {
          setError("Unauthorized! Please log in.");
          return;
        }
        const res = await axios.get("http://localhost:5000/api/applications/student", {
          withCredentials: true, // Ensures JWT cookie is sent
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData(res.data); // Auto-fill form with student data
      } catch (err) {
        setError("Student not found! " + err.response?.data?.message);
      }
    };

    fetchStudent();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit (Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.put(
        "http://localhost:5000/api/applications/update/student",
        formData,
        { withCredentials: true }
      );
      console.log(response.data);
      toast.success("Student updated successfully!");
      setTimeout(()=>navigate("/home"),1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed!");
      setError(err.response?.data?.message || "Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Update Student</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} disabled className="border p-2 rounded" />

          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required className="border p-2 rounded" />
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="border p-2 rounded" />

          <select name="gender" value={formData.gender} onChange={handleChange} required className="border p-2 rounded">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} required className="border p-2 rounded" />

          <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="border p-2 rounded" />

          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required className="border p-2 rounded" />
          <input type="number" name="admissionYear" placeholder="Admission Year" value={formData.admissionYear} onChange={handleChange} required className="border p-2 rounded" />

          <input type="text" name="guardianContact" placeholder="Guardian Contact" value={formData.guardianContact} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="previousSchool" placeholder="Previous School" value={formData.previousSchool} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="extracurricularActivities" placeholder="Extracurricular Activities" value={formData.extracurricularActivities} onChange={handleChange} className="border p-2 rounded" />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded col-span-2">
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
