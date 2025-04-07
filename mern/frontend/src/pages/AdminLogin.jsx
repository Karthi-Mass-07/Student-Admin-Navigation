import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import AdminImage from "../images/Admin.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = ({ setUserType }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/checkAuth", {
          withCredentials: true,
        });

        if (response.data.userType === "admin") {
          setUserType("admin");
          navigate("/adminDashboard");
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
      }
    };

    checkAuth();
  }, [navigate, setUserType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", formData, {
        withCredentials: true,
      });

      if (!response.data.success) {
        setErrors({ login: response.data.message || "Login failed" });
        return;
      }

      setUserType("admin");
      toast.success(response.data.message);
      setTimeout(()=>navigate("/adminDashboard"),3000); 
    } catch (error) {
      toast.error("Invalid email or password", error.response?.data || error.message);
      setErrors({ login: error.response?.data?.message || "Login failed" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-full md:w-[40%] h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">Admin Portal</h2>
          <p className="text-center text-gray-500">Login to your account</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                autoComplete="off"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {errors.login && <p className="text-red-500 text-sm text-center">{errors.login}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/adminRegister" className="text-blue-500 font-medium">
              Register Here
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-[60%] h-screen">
        <img
          src={AdminImage}
          alt="Admin Login"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
