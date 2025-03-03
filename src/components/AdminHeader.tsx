import React from "react";
import { Link } from "react-router-dom";

const AdminHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="text-xl font-bold text-orange-600">University Inventory System - Admin</h1>
      <div className="flex space-x-4">
        <Link to="/notifications" className="text-xl">🔔</Link>
        <Link to="/chat-admin" className="text-xl">💬</Link>
        <Link to="/admin-profile" className="text-xl">👤</Link>
      </div>
    </div>
  );
};
export default AdminHeader;