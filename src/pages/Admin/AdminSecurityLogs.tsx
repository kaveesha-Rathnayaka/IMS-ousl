import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const SecurityLogs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Security & Logs</h1>
          
          {/* Security Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>🔒 Total Logs: 230</div>
            <div>⚠️ Failed Logins: 15</div>
            <div>✅ Successful Logins: 215</div>
          </div>

          {/* Search & Filters */}
          <div className="mt-6 flex space-x-4">
            <input type="text" placeholder="🔍 Search Logs..." className="p-2 border border-gray-300 rounded" />
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">📅 Filter by Date</button>
          </div>

          {/* Security Logs Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Admin</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Approved Request</td>
                  <td className="p-3">2025-03-01</td>
                  <td className="p-3 text-green-600">✅ Success</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Jane Doe</td>
                  <td className="p-3">Login Attempt</td>
                  <td className="p-3">2025-03-02</td>
                  <td className="p-3 text-red-600">⚠️ Failed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">⚠️ View Unauthorized Access</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📩 Send Security Alert</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SecurityLogs;
