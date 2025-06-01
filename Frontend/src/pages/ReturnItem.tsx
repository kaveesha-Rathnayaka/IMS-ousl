import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnItem: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Return Item</h1>

          {/* Return Item Details */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h2 className="text-lg font-bold mb-3">🛠️ Return Details</h2>
            <p><strong>🏷️ Item:</strong> Laptop</p>
            <p><strong>📅 Return Due Date:</strong> 2025-03-10</p>
            <p><strong>📍 Drop-off Location:</strong> Computer Lab 2</p>
            <p><strong>⏳ Status:</strong> Pending Return</p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex space-x-4">
            <button onClick={() => alert("Return Confirmed!")} className="bg-green-500 text-white px-4 py-2 rounded-lg">
              ✅ Confirm Return
            </button>
            <button onClick={() => navigate("/notifications")} className="bg-red-500 text-white px-4 py-2 rounded-lg">
              ❌ Cancel
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReturnItem;
