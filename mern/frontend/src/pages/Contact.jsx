import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 📌 Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Send us a message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>

          {/* 📌 Contact Details */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <p className="text-gray-600">123 ABC Street, City, Country</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <p className="text-gray-600">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 text-xl" />
                <p className="text-gray-600">info@abcschool.com</p>
              </div>
            </div>

            {/* 📌 Social Media Links */}
            <h3 className="text-lg font-semibold mt-6 text-gray-700">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 text-2xl"><FaFacebook /></a>
              <a href="#" className="text-blue-400 text-2xl"><FaTwitter /></a>
              <a href="#" className="text-pink-500 text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* 📌 Optional Google Map Embed */}
        <div className="mt-10">
          <iframe 
            title="Google Map"
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508617!2d144.9559283156401!3d-37.81720974201444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc3423b5%3A0x27b77bde0b3215e7!2sABC%20International%20School!5e0!3m2!1sen!2sus!4v1644330000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
