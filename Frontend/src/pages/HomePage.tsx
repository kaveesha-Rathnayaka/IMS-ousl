// HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    if (role === "Admin") {
      navigate("/admin-login");
    } else if (role === "Staff") {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-white px-4">
      {/* Logo */}
      <img src={universityLogo} alt="OUSL Logo" className="w-20 mb-6" />

      {/* Title */}
      <h1 className="text-3xl font-bold text-orange-700 text-center mb-2">
        Welcome to the OUSL Inventory Management System
      </h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        Please select your role to login
      </p>

      {/* Role Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
        <button
          onClick={() => handleRoleSelection("Staff")}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg shadow text-lg"
        >
          👨‍💼 Staff Login
        </button>
        <button
          onClick={() => handleRoleSelection("Admin")}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg shadow text-lg"
        >
          🛠️ Admin Login
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 Open University Inventory System
      </footer>
    </div>
  );
};

export default HomePage;
