import { Link } from "react-router-dom";
import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import EntryImg from '../images/Entry_Page.jpg'

const UserSelection = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${EntryImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          .hover-scale:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease-in-out;
          }
        `}
      </style>
      <h1 className="text-4xl font-extrabold mb-6 text-white bg-black bg-opacity-50 p-3 rounded-lg fade-in font-serif">
        Select Your Role
      </h1>
      <div className="flex space-x-10 fade-in" style={{ animationDelay: "0.5s" }}>
        <Link
          to="/studentLogin"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-gray-200 hover-scale"
        >
          <FaUserGraduate size={50} className="text-blue-500 mb-2" />
          <span className="text-xl font-bold font-mono">Student</span>
        </Link>

        <Link
          to="/adminLogin"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-gray-200 hover-scale"
        >
          <FaUserShield size={50} className="text-red-500 mb-2" />
          <span className="text-xl font-bold font-mono">Admin</span>
        </Link>
      </div>
    </div>
  );
};

export default UserSelection;
