import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/applications");
      setStudents(response.data);
    } catch (err) {
      setError("Failed to fetch students");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:5000/api/applications/${id}`);
        toast.success("Student deleted successfully!");
        fetchStudents(); // Refresh the student list
      } catch (err) {
        toast.error("Failed to delete student");
        console.error("Error:", err);
      }
    }
  };

  if (loading) return <p>Loading students...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      
      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-300 text-sm md:text-base">
              <th className="border p-1 md:p-2">Name</th>
              <th className="border p-1 md:p-2">Email</th>
              <th className="border p-1 md:p-2">Gender</th>
              <th className="border p-1 md:p-2">Department</th>
              <th className="border p-1 md:p-2">Address</th>
              <th className="border p-1 md:p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} className={`text-center border-b text-sm md:text-base ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="border p-1 md:p-2">{student.name}</td>
                <td className="border p-1 md:p-2">{student.email}</td>
                <td className="border p-1 md:p-2">{student.gender}</td>
                <td className="border p-1 md:p-2">{student.department}</td>
                <td className="border p-1 md:p-2">{student.address}</td>
                <td className="border p-1 md:p-2">
                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="bg-red-500 text-white px-2 md:px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
