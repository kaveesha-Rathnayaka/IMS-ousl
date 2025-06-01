import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md p-3 flex justify-between items-center border-b border-gray-200">
      {/* System Title */}
      <h1 className="text-lg md:text-xl font-bold text-orange-600 tracking-wide">
        Inventory Management System
      </h1>

      {/* Navigation Links with Symbols */}
      <div className="flex space-x-6 text-sm md:text-base font-medium">
        <Link to="/notifications" className="hover:text-orange-600 transition">🔔</Link> {/* Notification Symbol */}
        <Link to="/chat-admin" className="hover:text-orange-600 transition">💬</Link> {/* Chat Symbol */}
        <Link to="/profile-settings" className="hover:text-orange-600 transition">👤</Link> {/* Profile Symbol */}
        
        {/* Logout Button with Symbol */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          🔑
        </button>
      </div>
    </header>
  );
};

export default Header;
