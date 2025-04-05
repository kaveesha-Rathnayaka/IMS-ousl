import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Sample Data: User's Requested Items
const requestData = [
  { id: 1, itemCode: "FX-1001", name: "Laptop", categoryCode: "CAT-001", category: "Fixed Asset", requestDate: "2025-03-01", status: "Approved" },
  { id: 2, itemCode: "FX-1002", name: "Printer", categoryCode: "CAT-002", category: "Fixed Asset", requestDate: "2025-03-02", status: "Pending" },
  { id: 3, itemCode: "ST-2001", name: "Pen", categoryCode: "CAT-003", category: "Consumable", requestDate: "2025-03-03", status: "Approved" },
  { id: 4, itemCode: "FX-1003", name: "Projector", categoryCode: "CAT-004", category: "Fixed Asset", requestDate: "2025-02-28", status: "Rejected" },
  { id: 5, itemCode: "ST-2002", name: "Notebook", categoryCode: "CAT-005", category: "Consumable", requestDate: "2025-03-05", status: "Pending" },
];

const MyRequests: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and search logic
  const filteredRequests = requestData.filter(
    (item) =>
      (filter === "All" || item.status === filter) &&
      (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Separate Fixed Assets & Consumables
  const fixedAssets = filteredRequests.filter(item => item.category === "Fixed Asset");
  const consumables = filteredRequests.filter(item => item.category === "Consumable");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">My Requests</h1>

          {/* Filter & Search Section */}
          <div className="bg-white shadow-md p-4 md:flex md:items-center md:justify-between rounded-lg mb-4">
            <div className="flex space-x-4">
              <span className="text-lg font-semibold">📌 Filter Requests:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="All">All Requests</option>
                <option value="Approved">✅ Approved</option>
                <option value="Pending">⏳ Pending</option>
                <option value="Rejected">❌ Rejected</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="🔍 Search Request by Name..."
              className="mt-2 md:mt-0 p-2 border border-gray-300 rounded w-full md:w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Fixed Assets Table */}
          <h2 className="text-xl font-bold text-orange-500 mt-4">🛠 Fixed Assets</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Code</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Category Code</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fixedAssets.length > 0 ? (
                  fixedAssets.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.itemCode}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.categoryCode}</td>
                      <td className="p-3">{item.requestDate}</td>
                      <td className={`p-3 font-semibold ${item.status === "Approved" ? "text-green-600" : item.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                        {item.status}
                      </td>
                      <td className="p-3">
                        {item.status === "Approved" && (
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => navigate("/pickup-instructions")}
                          >
                            📥 Download Confirmation
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center p-4 text-gray-500">
                      No Fixed Asset requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Consumable Items Table */}
          <h2 className="text-xl font-bold text-orange-500 mt-6">📋 Consumable Items</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Code</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Category Code</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {consumables.length > 0 ? (
                  consumables.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.itemCode}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.categoryCode}</td>
                      <td className="p-3">{item.requestDate}</td>
                      <td className={`p-3 font-semibold ${item.status === "Approved" ? "text-green-600" : item.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                        {item.status}
                      </td>
                      <td className="p-3">
                        {item.status === "Approved" && (
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => navigate("/pickup-instructions")}
                          >
                            📥 Download Confirmation
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center p-4 text-gray-500">
                      No Consumable requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyRequests;
