import React from "react";
import { Link, useNavigate } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-64 bg-white shadow-lg p-5 md:min-h-screen">
      {/* Logo */}
      <img src={universityLogo} alt="OUSL Logo" className="w-16 md:w-20 mx-auto mb-4" />

      {/* Updated Title: OUSL & Staff Panel */}
      <h2 className="text-lg md:text-xl font-bold text-orange-600 text-center">OUSL</h2>
      <h3 className="text-sm md:text-base font-medium text-gray-600 text-center">Staff Panel</h3>

      {/* Navigation Menu */}
      <nav className="mt-6 space-y-2 md:space-y-4">
        <Link to="/dashboard" className="block p-2 md:p-3 bg-orange-100 text-orange-600 rounded">🏠 Dashboard</Link>
        <Link to="/browse-inventory" className="block p-2 md:p-3 hover:bg-orange-200 rounded">📦 Browse Inventory</Link>
        <Link to="/my-requests" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🛒 My Requests</Link>
        <Link to="/my-items" className="block p-2 md:p-3 hover:bg-orange-200 rounded">📂 My Items</Link>
        <Link to="/request-repair" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🛠 Request Repair</Link>
        <Link to="/request-return" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🔄 Request Return</Link>
        <Link to="/notifications" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🔔 Notifications</Link>
        <Link to="/chat-admin" className="block p-2 md:p-3 hover:bg-orange-200 rounded">💬 Chat with Admin</Link>
        <Link to="/profile-settings" className="block p-2 md:p-3 hover:bg-orange-200 rounded">👤 Profile & Settings</Link>
        <Link to="/help-center" className="block p-2 md:p-3 hover:bg-orange-200 rounded">❓ Help Center</Link>

        {/* Logout Button - Redirects to Login Page */}
        <button
          onClick={() => navigate("/")}
          className="w-full text-left block p-2 md:p-3 bg-red-100 text-red-600 rounded"
        >
          🔑 Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
