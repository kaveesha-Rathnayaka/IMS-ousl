import React from "react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-64 bg-white shadow-lg p-5 md:min-h-screen">
      <img src={universityLogo} alt="University Logo" className="w-16 md:w-20 mx-auto mb-4" />
      <h2 className="text-lg md:text-xl font-bold text-orange-600 text-center">University Inventory System</h2>
      <nav className="mt-6 space-y-2 md:space-y-4">
        <Link to="/dashboard" className="block p-2 md:p-3 bg-orange-100 text-orange-600 rounded">🏠 Dashboard</Link>
        <Link to="/browse-inventory" className="block p-2 md:p-3 hover:bg-orange-200 rounded">📦 Browse Inventory</Link>
        <Link to="/my-requests" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🛒 My Requests</Link>
        <Link to="/notifications" className="block p-2 md:p-3 hover:bg-orange-200 rounded">🔔 Notifications</Link>
        <Link to="/chat-admin" className="block p-2 md:p-3 hover:bg-orange-200 rounded">💬 Chat with Admin</Link>
        <Link to="/profile-settings" className="block p-2 md:p-3 hover:bg-orange-200 rounded">👤 Profile & Settings</Link>
        <Link to="/help-center" className="block p-2 md:p-3 hover:bg-orange-200 rounded">❓ Help Center</Link>
        <Link to="/logout" className="block p-2 md:p-3 bg-red-100 text-red-600 rounded">🔑 Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;