import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Admin Dashboard</h1>
          
          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>📦 Total Inventory: 500</div>
            <div>🛒 Pending Requests: 10</div>
            <div>📊 Reports: 5</div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">➕ Add New Item</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📊 Generate Report</button>
          </div>

          {/* Recent Activity & Security Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold">Recent Admin Activities</h2>
              <p>✅ Approved Request - Laptop for User A</p>
              <p>❌ Rejected Request - Projector for User B</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold">Security Alerts</h2>
              <p>⚠️ Unauthorized login attempt detected.</p>
              <p>🔒 Admin Password Change Alert.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
