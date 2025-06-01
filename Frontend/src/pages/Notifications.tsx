import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Notifications</h1>
          
          {/* Notifications List */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-3">📌 System Notifications</h2>
            <ul className="space-y-3">
              <li 
                onClick={() => navigate("/return-item")} 
                className="p-3 border border-gray-300 rounded bg-green-100 text-green-700 cursor-pointer hover:bg-green-200">
                ✅ Request Approved: Your laptop request is confirmed!
              </li>
              <li className="p-3 border border-gray-300 rounded bg-yellow-100 text-yellow-700">
                ⚠️ Reminder: Return the borrowed camera by 2025-03-05
              </li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">📌 Mark All as Read</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">❌ Delete Notifications</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;
