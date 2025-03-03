import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const ProfileSettings: React.FC = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "user@university.com",
    role: "Staff",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">User Profile</h1>
          
          {/* Profile Information */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold mb-3">👤 Profile Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
          
          {/* Actions */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">✏️ Edit Profile</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">🔑 Change Password</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">🚪 Logout</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfileSettings;