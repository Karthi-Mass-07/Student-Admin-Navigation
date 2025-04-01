import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Our School</h2>

        {/* 📌 Mission & Vision */}
        <section className="text-gray-700 text-center mb-10">
          <p className="text-lg">
            <strong className="text-blue-600">ABC International School</strong> is committed to providing high-quality education 
            that nurtures young minds and fosters creativity, critical thinking, and leadership.
          </p>
          <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww" alt="School Campus" className="mt-6 rounded-lg mx-auto shadow-lg"/>
        </section>

        {/* 📌 Why Choose Us */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Experienced Faculty", desc: "Highly qualified teachers dedicated to student success.", image: "https://plus.unsplash.com/premium_photo-1727209458244-d22ea3b988db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RXhwZXJpZW5jZWQlMjBGYWN1bHR5fGVufDB8fDB8fHww" },
              { title: "Modern Facilities", desc: "Well-equipped labs, libraries, and classrooms.", image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" },
              { title: "Extracurricular Excellence", desc: "Activities including sports, music, and arts.", image: "https://images.unsplash.com/photo-1592632789004-57d4354f2499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXh0cmElMjBjYXJpY3VsYXIlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D" },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📌 Leadership Team */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Meet Our Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Dr. John Smith", role: "Principal", image: "https://plus.unsplash.com/premium_photo-1661284937039-4d00e054d9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzc2luZXNzbWFufGVufDB8fDB8fHww" },
              { name: "Mrs. Linda Brown", role: "Vice Principal", image: "https://plus.unsplash.com/premium_photo-1682092105693-1a2566cf2ee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzc2luZXNzbWFufGVufDB8fDB8fHww" },
            ].map((leader, index) => (
              <div key={index} className="flex items-center bg-white shadow-lg p-4 rounded-lg">
                <img src={leader.image} alt={leader.name} className="w-24 h-24 rounded-full object-cover mr-4"/>
                <div>
                  <h4 className="text-xl font-semibold">{leader.name}</h4>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📌 School Facilities */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Facilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { title: "Sports", image: "https://images.unsplash.com/photo-1518614368389-5160c0b0de72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwc3BvcnRzfGVufDB8fDB8fHww" },
            { title: "Music & Arts", image: "https://plus.unsplash.com/premium_photo-1682293779614-58b5ed05a8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjAlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" },
            { title: "Science Club", image: "https://plus.unsplash.com/premium_photo-1663089905440-78880eab98c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGNsdWIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" },
          ].map((facility, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold">{facility.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📌 Navigation Links */}
        <section className="bg-blue-500 text-white py-8 px-4 text-center rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Want to Learn More?</h3>
          <p className="text-lg mb-4">Explore our school and get in touch with us.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/students" className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold">
              View Students
            </Link>
            <Link to="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
