import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561330046-5d7e53492f23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className=" bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Green Valley International School</h1>
          <p className="text-lg md:text-xl">Empowering young minds for a brighter future</p>
          <a href="/students" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">Register Now</a>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our School</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600">
            Green Valley International School is a leading institution dedicated to academic excellence and holistic development.
            Our experienced faculty and modern facilities ensure that students receive the best education.
          </p>
          <img src="https://images.unsplash.com/photo-1588075592405-d3d4f0846961?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Classroom" className="mt-6 rounded-lg mx-auto shadow-lg"/>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Primary Education", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbWFyeSUyMFNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Middle School", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pZGRsZSUyMFNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "High School", image: "https://plus.unsplash.com/premium_photo-1661290835495-9d1a6144c19c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGlnaCUyMFNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" },
          ].map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 mt-2">High-quality education to prepare students for the future.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Extracurricular Activities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Sports", image: "https://images.unsplash.com/photo-1518614368389-5160c0b0de72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwc3BvcnRzfGVufDB8fDB8fHww" },
            { title: "Music & Arts", image: "https://plus.unsplash.com/premium_photo-1682293779614-58b5ed05a8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjAlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" },
            { title: "Science Club", image: "https://plus.unsplash.com/premium_photo-1663089905440-78880eab98c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGNsdWIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" },
          ].map((activity, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover"/>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{activity.title}</h3>
                <p className="text-gray-600 mt-2">Engaging students beyond academics for overall growth.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-500 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">We are here to answer any questions you have about our school.</p>
        <Link to="/contact" className="inline-block bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
