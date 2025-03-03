import React from "react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg";

const AdminSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-5 min-h-screen">
      <img src={universityLogo} alt="University Logo" className="w-20 mx-auto mb-4" />
      <h2 className="text-xl font-bold text-orange-600 text-center">Admin Panel</h2>
      <nav className="mt-6 space-y-4">
        <Link to="/admin-dashboard" className="block p-3 bg-orange-100 text-orange-600 rounded">🏠 Dashboard</Link>
        <Link to="/inventory-management" className="block p-3 hover:bg-orange-200 rounded">📦 Inventory</Link>
        <Link to="/requests-approvals" className="block p-3 hover:bg-orange-200 rounded">🛒 Requests</Link>
        <Link to="/reports-analytics" className="block p-3 hover:bg-orange-200 rounded">📊 Reports</Link>
        <Link to="/user-management" className="block p-3 hover:bg-orange-200 rounded">👥 Users</Link>
        <Link to="/security-logs" className="block p-3 hover:bg-orange-200 rounded">🔒 Security</Link>
        <Link to="/notifications" className="block p-3 hover:bg-orange-200 rounded">🔔 Notifications</Link>
        <Link to="/admin-profile" className="block p-3 hover:bg-orange-200 rounded">👤 Profile</Link>
        <Link to="/admin-login" className="block p-3 bg-red-100 text-red-600 rounded">🚪 Logout</Link>
      </nav>
    </div>
  );
};
export default AdminSidebar;