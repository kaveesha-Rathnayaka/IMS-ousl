import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PickupInstructions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Item Pickup Details</h1>

          {/* Pickup Details */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h2 className="text-lg font-bold mb-3">✅ Your request for <span className="text-orange-600">Laptop</span> has been approved!</h2>
            <p><strong>📍 Pickup Location:</strong> Computer Lab 2</p>
            <p><strong>📅 Pickup Date:</strong> 2025-03-05</p>
            <p><strong>🕒 Pickup Hours:</strong> 9:00 AM - 5:00 PM</p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex space-x-4">
            <button onClick={() => navigate("/my-requests")} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              📩 Return to My Requests
            </button>
            <button onClick={() => navigate("/dashboard")} className="bg-orange-600 text-white px-4 py-2 rounded-lg">
              🏠 Go to Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PickupInstructions;
