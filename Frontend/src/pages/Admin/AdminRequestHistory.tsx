import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const RequestHistory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-orange-600">
              📜 Request History
            </h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              🔙 Back
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">User</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Action Taken</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Laptop</td>
                  <td className="p-3 text-green-600">✅ Approved</td>
                  <td className="p-3">2025-03-01</td>
                  <td className="p-3">Approved by Admin1</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Jane Doe</td>
                  <td className="p-3">Projector</td>
                  <td className="p-3 text-red-600">❌ Rejected</td>
                  <td className="p-3">2025-03-02</td>
                  <td className="p-3">Rejected by Admin2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestHistory;
