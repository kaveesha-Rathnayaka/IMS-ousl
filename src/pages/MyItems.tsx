import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Sample Data: User's Items
const fixedAssets = [
  { id: 1, name: "Laptop", category: "Fixed", status: "Borrowed" },
  { id: 2, name: "Projector", category: "Fixed", status: "Owned" },
  { id: 3, name: "Printer", category: "Fixed", status: "Borrowed" },
];

const consumableItems = [
  { id: 4, name: "Notebook", category: "Stationary" },
  { id: 5, name: "Pen", category: "Stationary" },
  { id: 6, name: "Stapler", category: "Stationary" },
];

const MyItems: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">My Items</h1>

          {/* Fixed Assets Section */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">📦 Fixed Assets</h2>
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
                {fixedAssets.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3 flex space-x-2">
                      {/* Request Repair Button */}
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => navigate("/request-repair")}
                      >
                        🛠 Request Repair
                      </button>

                      {/* Return Item Button (Only for Borrowed Items) */}
                      {item.status === "Borrowed" && (
                        <button
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                          onClick={() => navigate("/request-return")}
                        >
                          🔄 Return Item
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Consumable Items Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3">🖊️ Consumable Items (Stationary)</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item</th>
                  <th className="p-3">Category</th>
                </tr>
              </thead>
              <tbody>
                {consumableItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyItems;
