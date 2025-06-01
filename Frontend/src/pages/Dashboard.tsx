import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample Inventory Data
const inventoryItems = [
  { id: 1, name: "Laptop", category: "Fixed Asset", categoryCode: "FX-1001" },
  { id: 2, name: "Printer", category: "Fixed Asset", categoryCode: "FX-1002" },
  { id: 3, name: "Pen", category: "Consumable", categoryCode: "ST-2001" },
  { id: 4, name: "Notebook", category: "Consumable", categoryCode: "ST-2002" },
  { id: 5, name: "Projector", category: "Fixed Asset", categoryCode: "FX-1003" },
];

// Unique Categories
const categories = [...new Set(inventoryItems.map((item) => item.category))];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter inventory items based on search term
  const filteredItems = inventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );

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

            {/* Search and Category Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by item name..."
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  navigate("/browse-inventory");
                }}
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Results */}
            {searchTerm && (
              <div className="mt-4 bg-gray-50 border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700">Search Results:</h3>
                <ul className="mt-2 space-y-2">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <li
                        key={item.id}
                        className="p-2 border-b cursor-pointer hover:bg-orange-100 rounded"
                        onClick={() => navigate("/browse-inventory")}
                      >
                        {item.name} ({item.categoryCode})
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No matching items found.</li>
                  )}
                </ul>
              </div>
            )}
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
            <button
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={() => navigate("/browse-inventory")}
            >
              📩 Request New Item
            </button>
            <button
              className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
              onClick={() => navigate("/request-return")}
            >
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
