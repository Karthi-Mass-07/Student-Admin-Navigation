import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import studentImage from "../images/Students.jpg";
import { Eye, EyeOff } from "lucide-react"; // Importing correct icons
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StudentReg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Toggle for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters long";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.department) newErrors.department = "Please select a department";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:5000/api/student/register", formData);
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      setTimeout(() => navigate("/studentLogin"), 3000); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Left Side Registration Form */}
      <div className="w-full md:w-[40%] h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">
            Student Registration
          </h2>
          <p className="text-center text-gray-500">Create your account</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5" autoComplete="off">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Mobile"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
              </select>
              {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"} // Fixed toggle logic
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/studentLogin" className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex w-full md:w-[60%] h-screen">
        <img
          src={studentImage}
          alt="Student Registration"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default StudentReg;
