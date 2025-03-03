import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const BrowseInventory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Browse Inventory</h1>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-4 bg-white p-3 shadow rounded-lg">
            <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded">🏠 Dashboard</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">📦 Browse Inventory</button>
            <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded">🛒 My Requests</button>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
            <input type="text" placeholder="🔍 Search Inventory..." className="p-2 border border-gray-300 rounded w-full md:w-2/3 mb-2 md:mb-0" />
            <select className="p-2 border border-gray-300 rounded w-full md:w-1/3">
              <option value="all">📌 All Categories</option>
              <option value="computers">Computers</option>
              <option value="accessories">Accessories</option>
              <option value="printers">Printers</option>
            </select>
          </div>
          
          {/* Inventory Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Laptop</td>
                  <td className="p-3">Computers</td>
                  <td className="p-3 text-green-600">Available</td>
                  <td className="p-3">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => navigate("/request-confirmation")}
                    >
                      📩 Request
                    </button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Printer</td>
                  <td className="p-3">Accessories</td>
                  <td className="p-3 text-red-600">In Use</td>
                  <td className="p-3">
                    <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded" disabled>
                      ❌ Unavailable
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Scan QR Code */}
          <div className="mt-6 text-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">📸 Scan QR Code to View Item Details</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BrowseInventory;