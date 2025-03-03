import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminProfile: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "John Doe",
    email: "admin@university.com",
    role: "Administrator",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Admin Profile</h1>
          
          {/* Profile Information */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold mb-3">👤 Profile Information</h2>
            <p><strong>Name:</strong> {admin.name}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Role:</strong> {admin.role}</p>
          </div>
          
          {/* Actions */}
          <div className="flex space-x-4">
            <button onClick={() => navigate("/edit-profile")} className="bg-blue-500 text-white px-4 py-2 rounded-lg">✏️ Edit Profile</button>
            <button onClick={() => navigate("/change-password")} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">🔑 Change Password</button>
            <button onClick={() => navigate("/logout-confirmation")} className="bg-red-500 text-white px-4 py-2 rounded-lg">🚪 Logout</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminProfile;
