import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    navigate("/admin-profile");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Change Password</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <label className="block mb-2">Current Password</label>
            <input type="password" name="currentPassword" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <label className="block mb-2">New Password</label>
            <input type="password" name="newPassword" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <label className="block mb-2">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <div className="flex space-x-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">✅ Update Password</button>
              <button type="button" onClick={() => navigate("/admin-profile")} className="bg-red-500 text-white px-4 py-2 rounded">❌ Cancel</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChangePassword;
