import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const ReturnItemRequest: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    reason: "",
    adminType: "Management Officer",
  });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.itemName || !formData.itemCode || !formData.reason || !uploadedImage) {
      alert("Please fill in all fields and upload an image.");
      return;
    }
    alert(`Return request submitted to ${formData.adminType} successfully!`);
    navigate("/my-items"); // Redirect to My Items after submission
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Return Item Request</h1>
          
          {/* Return Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            {/* Item Name */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">📦 Item Name:</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter item name"
              />
            </div>

            {/* Item Code */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">🔢 Item Code:</label>
              <input
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter item code"
              />
            </div>

            {/* Reason for Return */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">📝 Reason for Return:</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows={3}
                placeholder="Describe why you're returning the item..."
              ></textarea>
            </div>

            {/* Select Admin */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">👨‍💼 Select Admin:</label>
              <select
                name="adminType"
                value={formData.adminType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="Management Officer">📋 Management Officer (Non-Digital Items)</option>
                <option value="Technical Officer">💻 Technical Officer (Digital Items)</option>
              </select>
            </div>

            {/* Upload Item Condition Image */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">📸 Upload Item Condition Image:</label>
              <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full p-2 border border-gray-300 rounded" />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                ✅ Submit Return Request
              </button>
            </div>
          </form>

          {/* Option to Download PDF */}
          <div className="mt-4 text-center">
            <a
              href="/path/to/return-form.pdf"
              download
              className="text-blue-600 hover:underline"
            >
              📥 Download Return Request Form (PDF)
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReturnItemRequest;
