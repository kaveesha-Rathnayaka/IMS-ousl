import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminNotifications: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Admin Notifications</h1>
          
          {/* Notifications List */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h2 className="text-lg font-bold mb-3">📌 System Notifications</h2>
            <ul className="space-y-3">
              <li className="p-3 border border-gray-300 rounded bg-green-100 text-green-700">
                ✅ Request Approved: Laptop request for User A has been confirmed.
              </li>
              <li className="p-3 border border-gray-300 rounded bg-red-100 text-red-700">
                🚨 Low Stock Alert: Laptops running low!
              </li>
              <li className="p-3 border border-gray-300 rounded bg-yellow-100 text-yellow-700">
                ⚠️ Reminder: Pending request for Projector from User B.
              </li>
              <li className="p-3 border border-gray-300 rounded bg-red-100 text-red-700">
                ❌ Alert: Unauthorized login attempt detected.
              </li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📌 Mark All as Read</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">❌ Delete Notifications</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminNotifications;
