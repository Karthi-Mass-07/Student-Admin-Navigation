import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, LogOutIcon, MenuIcon, XIcon, Info, Mail } from "lucide-react";

const StudentNavBar = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white fixed w-full top-0 shadow-lg z-50">
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
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>

            <Link to="/about" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
              <Info size={20} />
              <span>About Us</span>
            </Link>

            <Link to="/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
              <Mail size={20} />
              <span>Contact Us</span>
            </Link>



            <Link to="/student/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
              <UserIcon size={20} />
              <span>Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-2 space-y-2">
          <Link to="/home" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-blue-600 transition duration-300 block">
            <HomeIcon size={20} />
            <span>Home</span>
          </Link>

          <Link to="/about" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
            <Info size={20} />
            <span>About Us</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500 rounded-lg transition duration-300">
            <Mail size={20} />
            <span>Contact Us</span>
          </Link>


          <Link to="/student/profile" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-blue-600 transition duration-300 block">
            <UserIcon size={20} />
            <span>Profile</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300"
          >
            <LogOutIcon size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default StudentNavBar;
