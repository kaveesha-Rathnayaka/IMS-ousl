import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const InventoryManagement: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Inventory Management</h1>

          {/* Search Bar */}
          <div className="mb-4">
            <input type="text" placeholder="🔍 Search Inventory..." className="w-full p-3 border border-gray-300 rounded" />
          </div>

          {/* Inventory Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Laptop</td>
                  <td className="p-3">Computers</td>
                  <td className="p-3 text-green-600">Available</td>
                  <td className="p-3">10</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">✏️ Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">❌ Remove</button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Printer</td>
                  <td className="p-3">Accessories</td>
                  <td className="p-3 text-red-600">In Use</td>
                  <td className="p-3">5</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">✏️ Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">❌ Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">➕ Add New Item</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">📸 Scan QR Code</button>
          </div>

          {/* Inventory Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-6">
            <div>📦 Available Items: 50</div>
            <div>🛠 In Use: 20</div>
            <div>⚠️ Under Repair: 5</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default InventoryManagement;
