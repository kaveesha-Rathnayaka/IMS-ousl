import React, { useState } from "react";
import Sidebar from "../../components/AdminSidebar";
import Header from "../../components/AdminHeader";
import Footer from "../../components/Footer";


const TransferItems: React.FC = () => {
  const [transferData, setTransferData] = useState({
    itemCode: "",
    itemName: "",
    fromDepartment: "",
    toDepartment: "",
    transferDate: "",
    remarks: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTransferData({ ...transferData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Transfer details submitted successfully.");
    // Backend API integration goes here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Enter Transfer Items Details</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="itemCode"
                placeholder="Item Code"
                value={transferData.itemCode}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={transferData.itemName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="fromDepartment"
                placeholder="From Department"
                value={transferData.fromDepartment}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="toDepartment"
                placeholder="To Department"
                value={transferData.toDepartment}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="date"
                name="transferDate"
                value={transferData.transferDate}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <textarea
                name="remarks"
                placeholder="Remarks (optional)"
                value={transferData.remarks}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded col-span-1 md:col-span-2"
              />
            </div>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
              >
                Submit Transfer
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TransferItems;
