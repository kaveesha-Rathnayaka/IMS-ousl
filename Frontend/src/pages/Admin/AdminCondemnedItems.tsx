import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const CondemnedItems: React.FC = () => {
  const [formData, setFormData] = useState({
    itemCode: "",
    itemName: "",
    category: "",
    condition: "",
    reason: "",
    condemnedDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Condemned item details submitted successfully!");
    // Submit to backend or database
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Enter Condemned Item Details</h1>

          <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 mt-4 rounded-lg space-y-4">
            <input
              type="text"
              name="itemCode"
              placeholder="Item Code"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="condition"
              placeholder="Condition (e.g., Broken, Unusable)"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <textarea
              name="reason"
              placeholder="Reason for Condemnation"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="date"
              name="condemnedDate"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CondemnedItems;
