import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About School */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Green Valley School</h2>
            <p className="text-gray-400">
              Providing quality education for young minds to grow and excel in life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition">Events</Link></li>
            </ul>
          </div>

          {/* Contact Information & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt /> 123 School Street, New York, USA
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaEnvelope /> contact@greenvalleyschool.com
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaPhone /> +1 234 567 8900
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Green Valley School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
