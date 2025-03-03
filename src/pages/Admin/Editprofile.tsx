import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "John Doe",
    email: "admin@university.com",
    contact: "+94 767 527 690",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    navigate("/admin-profile");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <label className="block mb-2">Name</label>
            <input type="text" name="name" value={admin.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <label className="block mb-2">Email</label>
            <input type="email" name="email" value={admin.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <label className="block mb-2">Contact</label>
            <input type="text" name="contact" value={admin.contact} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-4" />

            <div className="flex space-x-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">✅ Save Changes</button>
              <button type="button" onClick={() => navigate("/admin-profile")} className="bg-red-500 text-white px-4 py-2 rounded">❌ Cancel</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
