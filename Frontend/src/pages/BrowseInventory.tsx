import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const fixedAssets = [
  { id: "FA-001", name: "Laptop", category: "Computers", status: "Available", quantity: 5 },
  { id: "FA-002", name: "Printer", category: "Accessories", status: "In Use", quantity: 0 }
];

const consumableItems = [
  { id: "CI-101", name: "Pen", category: "Stationary", status: "Available", quantity: 100 },
  { id: "CI-102", name: "Notebook", category: "Stationary", status: "Available", quantity: 50 }
];

const categories = [
  { code: "CAT-01", name: "Computers" },
  { code: "CAT-02", name: "Accessories" },
  { code: "CAT-03", name: "Stationary" }
];

const BrowseInventory: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on category and search term
  const availableItems = [...fixedAssets, ...consumableItems].filter(
    (item) =>
      (selectedCategory === "" || item.category === selectedCategory) &&
      (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.includes(searchTerm))
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Browse Inventory</h1>

          {/* Category Selection & Search */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
            <select
              className="p-2 border border-gray-300 rounded w-full md:w-1/3"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">📌 Select Category</option>
              {categories.map((cat) => (
                <option key={cat.code} value={cat.name}>
                  {cat.code} - {cat.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="🔍 Search Item by Name or Code..."
              className="p-2 border border-gray-300 rounded w-full md:w-2/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Fixed Assets Table */}
          <h2 className="text-xl font-semibold mt-4 text-orange-500">Fixed Assets</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Code</th>
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {availableItems
                  .filter((item) => fixedAssets.some((fa) => fa.id === item.id))
                  .map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.id}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.category}</td>
                      <td className={`p-3 ${item.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                        {item.status}
                      </td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          onClick={() => navigate("/request-form", { state: { item } })}
                          disabled={item.quantity === 0}
                        >
                          📩 Request
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Consumable Items Table */}
          <h2 className="text-xl font-semibold mt-6 text-orange-500">Consumable Items (Stationary)</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Code</th>
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {availableItems
                  .filter((item) => consumableItems.some((ci) => ci.id === item.id))
                  .map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.id}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.category}</td>
                      <td className={`p-3 ${item.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                        {item.status}
                      </td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          onClick={() => navigate("/request-form", { state: { item } })}
                          disabled={item.quantity === 0}
                        >
                          📩 Request
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Scan QR Code */}
          <div className="mt-6 text-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              📸 Scan QR Code to View Item Details
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BrowseInventory;
