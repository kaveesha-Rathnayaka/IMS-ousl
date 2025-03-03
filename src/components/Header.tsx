import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-orange-600">University Inventory System</h1>
      <div className="flex space-x-4 items-center">
        <Link to="/notifications" className="text-lg hover:text-orange-600">🔔</Link>
        <Link to="/chat-admin" className="text-lg hover:text-orange-600">💬</Link>
        <Link to="/profile-settings" className="text-lg hover:text-orange-600">👤</Link>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          🔑 Logout
        </button>
      </div>
    </header>
  );
};

export default Header;