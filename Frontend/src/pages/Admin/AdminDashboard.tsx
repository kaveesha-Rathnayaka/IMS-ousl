import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">📊 Admin Dashboard</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold text-gray-700">📦 Total Inventory</h2>
              <p className="text-3xl font-bold text-orange-600">1250</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold text-gray-700">🛒 Pending Requests</h2>
              <p className="text-3xl font-bold text-yellow-500">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold text-gray-700">🔧 Items in Repair</h2>
              <p className="text-3xl font-bold text-red-500">5</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => navigate("/admininventory-management")}
              className="bg-orange-500 text-white px-6 py-4 rounded-lg shadow hover:bg-orange-600"
            >
              ➕ Go to Inventory Management
            </button>
            <button
              onClick={() => navigate("/requests-approvals")}
              className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600"
            >
              🗂 View Requests
            </button>
            <button
              onClick={() => navigate("/reports-analytics")}
              className="bg-purple-600 text-white px-6 py-4 rounded-lg shadow hover:bg-purple-700"
            >
              📈 View Reports
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">🕓 Recent Admin Activity</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✅ Approved request from User A (2025-03-28)</li>
              <li>📦 Added new item: Printer (2025-03-27)</li>
              <li>🛠 Marked Laptop as repaired (2025-03-26)</li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
