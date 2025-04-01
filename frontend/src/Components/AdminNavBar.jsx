import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FileText, User, LogOut, Menu, X, Info, Mail } from "lucide-react";

const AdminNavBar = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link to="/home" className="text-2xl font-bold">
            Green Valley School
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavItem to="/home" icon={<Home size={20} />} label="Home" />
            <NavItem to="/admin-dashboard" icon={<FileText size={20} />} label="Applications" />
            <NavItem to="/admin/profile" icon={<User size={20} />} label="Profile" />
            <NavItem to="/about" icon={<Info size={20} />} label="About Us" />
            <NavItem to="/contact" icon={<Mail size={20} />} label="Contact Us" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 py-2 space-y-2">
          <NavItem to="/adminDashboard" icon={<Home size={20} />} label="Home" isMobile />
          <NavItem to="/adminApplications" icon={<FileText size={20} />} label="Applications" isMobile />
          <NavItem to="/adminProfile" icon={<User size={20} />} label="Profile" isMobile />
          <NavItem to="/about" icon={<Info size={20} />} label="About Us" isMobile  />
          <NavItem to="/contact" icon={<Mail size={20} />} label="Contact Us" isMobile/>
          <button
            onClick={handleLogout}
            className="flex items-center w-full gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, icon, label, isMobile }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg transition duration-300 ${isMobile ? "block text-white" : ""
      }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default AdminNavBar;
