import React from "react";
import { Link, useLocation } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg";

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `block p-2 text-sm rounded transition ${
      location.pathname === path
        ? "bg-orange-100 text-orange-600 font-semibold"
        : "hover:bg-orange-200 text-gray-700"
    }`;

  return (
    <div className="w-full md:w-64 bg-white shadow-lg p-5 md:min-h-screen">
      <img
        src={universityLogo}
        alt="University Logo"
        className="w-16 md:w-20 mx-auto mb-2"
      />
      <h2 className="text-sm font-bold text-orange-600 text-center mb-4">
        OUSL Admin Panel
      </h2>

      <nav className="space-y-3">
        <Link to="/admin-dashboard" className={linkClass("/admin-dashboard")}>📊 Dashboard</Link>
        <Link to="/admininventory-management" className={linkClass("/admininventory-management")}>📦 Inventory Management</Link>
        <Link to="/requests-approvals" className={linkClass("/requests-approvals")}>🗂 Requests & Approvals</Link>
        <Link to="/reports-analytics" className={linkClass("/reports-analytics")}>📈 Reports & Analytics</Link>
        <Link to="/user-management" className={linkClass("/user-management")}>👥 User Management</Link>
        <Link to="/admin-updating-restocking-items" className={linkClass("/admin-updating-restocking-items")}>📥 Restocking</Link>
        <Link to="/admin-transfer-items" className={linkClass("/admin-transfer-items")}>🔄 Transfer Items</Link>
        <Link to="/admin-updating-repairing-items" className={linkClass("/admin-updating-repairing-items")}>🛠 Repair Items</Link>
        <Link to="/admin-condemned-items" className={linkClass("/admin-condemned-items")}>🗑 Condemned Items</Link>
        <Link to="/admin-qr-code-reader" className={linkClass("/admin-qr-code-reader")}>📷 QR Tools</Link>
        <Link to="/adminnotifications" className={linkClass("/adminnotifications")}>🔔 Notifications</Link>
        <Link to="/security-logs" className={linkClass("/security-logs")}>🔐 Security Logs</Link>
        <Link to="/admin-audit-log" className={linkClass("/admin-audit-log")}>🧾 Audit Logs</Link>
        <Link to="/admin-profile" className={linkClass("/admin-profile")}>👤 Profile</Link>
        <Link to="/logout-confirmation" className="block p-2 text-sm rounded text-red-600 bg-red-100 hover:bg-red-200">
          🔑 Logout
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
