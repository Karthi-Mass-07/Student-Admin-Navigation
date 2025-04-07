import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link

const StudentDashboard = () => {
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

  // Department options
  const departmentOptions = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Biotechnology",
    "Electronics & Communication",
    "Information Technology",
    "Chemical Engineering",
    "Aeronautical Engineering",
    "Biomedical Engineering",
  ];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/applications/register", formData, {
        withCredentials: true, 
      });
      alert(response.data.message);

      // Navigate to student login after successful registration
      navigate("/home");

      // Reset form
      setFormData({
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
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Student Registration</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border p-2 rounded"  disabled={true} />
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

          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required className="border p-2 rounded">
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="border p-2 rounded" />

          <select name="department" value={formData.department} onChange={handleChange} required className="border p-2 rounded">
            <option value="">Select Department</option>
            {departmentOptions.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>

          <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required className="border p-2 rounded" />
          <input type="number" name="admissionYear" placeholder="Admission Year" value={formData.admissionYear} onChange={handleChange} required className="border p-2 rounded" />
          
          <input type="text" name="guardianContact" placeholder="Guardian Contact" value={formData.guardianContact} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="previousSchool" placeholder="Previous School" value={formData.previousSchool} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="extracurricularActivities" placeholder="Extracurricular Activities" value={formData.extracurricularActivities} onChange={handleChange} className="border p-2 rounded" />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded col-span-2">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default StudentDashboard;
