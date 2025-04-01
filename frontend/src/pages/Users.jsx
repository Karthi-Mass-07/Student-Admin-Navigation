import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch students
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/student/all");
        setStudents(response.data.student);
      } catch (err) {
        setError("Failed to fetch student data"+err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Admin - Student List</h2>

      {loading && <p>Loading students...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Roll No</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="text-center">
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.email}</td>
                <td className="border p-2">{student.phoneNumber}</td>
                <td className="border p-2">{student.department}</td>
                <td className="border p-2">{student.rollNumber}</td>
                <td className="border p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
