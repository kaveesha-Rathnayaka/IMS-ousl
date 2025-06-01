import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const RequestConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5 text-center">
          <h1 className="text-2xl font-bold text-orange-600">Request Confirmation</h1>

          {/* Confirmation Message */}
          <div className="bg-white shadow-md rounded-lg p-5 mt-4">
            <p className="text-green-600 text-xl font-semibold">✅ Your request for <strong>Laptop</strong> has been submitted!</p>
            <p className="text-gray-700 mt-3">🕒 Status: Pending approval from Admin.</p>
            <p className="text-gray-700">📅 Estimated Approval Time: 24 hours.</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row justify-center space-y-3 md:space-x-4 md:space-y-0">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/my-requests")}
            >
              📦 View My Requests
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => navigate("/dashboard")}
            >
              🏠 Go to Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestConfirmation;
