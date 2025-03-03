import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Sample Data: User's Requested Items
const requestData = [
  { id: 1, name: "Laptop", requestDate: "2025-03-01", status: "Approved" },
  { id: 2, name: "Printer", requestDate: "2025-03-02", status: "Pending" },
  { id: 3, name: "Projector", requestDate: "2025-02-28", status: "Rejected" },
];

const MyRequests: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  // Filtered Requests Based on Selection
  const filteredRequests =
    filter === "All" ? requestData : requestData.filter((item) => item.status === filter);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">My Requests</h1>

          {/* Filter Section */}
          <div className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg mb-4">
            <span className="text-lg font-bold">📌 Filter Requests:</span>
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

          {/* Requests Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.requestDate}</td>
                      <td
                        className={`p-3 ${
                          item.status === "Approved"
                            ? "text-green-600"
                            : item.status === "Pending"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.status === "Approved"
                          ? "✅ Approved"
                          : item.status === "Pending"
                          ? "⏳ Pending"
                          : "❌ Rejected"}
                      </td>
                      <td className="p-3">
                        {/* Only Show Download Button for Approved Requests */}
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
                    <td colSpan={4} className="text-center p-4 text-gray-500">
                      No requests found for this category.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* New Request Button */}
          <div className="mt-6 text-center">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => navigate("/browse-inventory")}
            >
              📩 New Item Request
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyRequests;
