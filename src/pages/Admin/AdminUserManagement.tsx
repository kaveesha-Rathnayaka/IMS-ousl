import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const UserManagement: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">User Management</h1>
          
          {/* User Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>👥 Total Users: 120</div>
            <div>🛠 Admins: 5</div>
            <div>👤 Regular Users: 115</div>
          </div>

          {/* Search and Role Management */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📌 Assign Roles</button>
            <input type="text" placeholder="🔍 Search Users..." className="p-2 border border-gray-300 rounded" />
          </div>

          {/* Users Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">User</td>
                  <td className="p-3 text-green-600">Active</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">✏️ Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">🚫 Disable</button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Jane Smith</td>
                  <td className="p-3">Admin</td>
                  <td className="p-3 text-green-600">Active</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">✏️ Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">🚫 Disable</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">✅ Approve New User</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">❌ Reject User</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserManagement;
