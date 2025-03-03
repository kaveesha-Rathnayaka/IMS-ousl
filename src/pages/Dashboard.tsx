import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-orange-100 to-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Header />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-orange-700 text-center mb-6">📊 User Dashboard</h1>

          {/* Inventory Overview Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-gray-800">📦 Available Inventory</h2>
              <p className="text-2xl font-bold text-orange-600 mt-2">5 Laptops</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-gray-800">🛒 My Borrowed Items</h2>
              <p className="text-2xl font-bold text-orange-600 mt-2">3 Printers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-gray-800">🔔 Alerts</h2>
              <p className="text-2xl font-bold text-red-500 mt-2">⚠️ Return Reminder!</p>
            </div>
          </div>

          {/* Search Inventory */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">🔍 Search Inventory</h2>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Recent Requests Table */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Recent Requests</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Laptop</td>
                  <td className="p-3 text-green-600">✅ Approved</td>
                  <td className="p-3">2025-03-05</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Camera</td>
                  <td className="p-3 text-yellow-600">⏳ Pending</td>
                  <td className="p-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
              📩 Request New Item
            </button>
            <button className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
              🔄 Return Borrowed Item
            </button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
