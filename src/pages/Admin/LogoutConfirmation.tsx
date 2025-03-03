import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/admin-login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-bold text-orange-600 mb-4">Are you sure you want to log out?</h2>
        <div className="flex space-x-4">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">✅ Yes, Logout</button>
          <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded">❌ Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
