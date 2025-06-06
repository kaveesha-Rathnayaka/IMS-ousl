import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import defaultAvatar from "../../assets/default-avatar.png"; // Add a placeholder image to assets

const AdminProfile: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "Sunil perera",
    email: "admin@university.com",
    role: "Administrator",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Admin Profile</h1>

          {/* Profile Card with Image */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="text-center">
              <img
                src={profileImage || defaultAvatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-orange-500 mb-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="text-sm"
              />
            </div>

            <div className="flex-1 space-y-2">
              <p><strong>Name:</strong> {admin.name}</p>
              <p><strong>Email:</strong> {admin.email}</p>
              <p><strong>Role:</strong> {admin.role}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/edit-profile")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              ✏️ Edit Profile
            </button>
            <button
              onClick={() => navigate("/change-password")}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              🔑 Change Password
            </button>
            <button
              onClick={() => navigate("/logout-confirmation")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              🚪 Logout
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminProfile;
