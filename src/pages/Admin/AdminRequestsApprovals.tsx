import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const RequestsApprovals: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Requests & Approvals</h1>
          
          {/* Requests Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>🛒 Total Requests: 15</div>
            <div>✅ Approved: 8</div>
            <div>⏳ Pending: 7</div>
          </div>

          {/* Filter Section */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">🔍 Filter by: Pending</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">✅ Filter by: Approved</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">❌ Filter by: Rejected</button>
          </div>

          {/* Requests Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">User</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Laptop</td>
                  <td className="p-3">2025-03-01</td>
                  <td className="p-3 text-yellow-600">⏳ Pending</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">✅ Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">❌ Reject</button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Jane Doe</td>
                  <td className="p-3">Projector</td>
                  <td className="p-3">2025-03-02</td>
                  <td className="p-3 text-yellow-600">⏳ Pending</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">✅ Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">❌ Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📩 Send Notification</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">📜 View Request History</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestsApprovals;
