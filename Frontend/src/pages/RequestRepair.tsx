import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const RequestRepair: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAdmin, setSelectedAdmin] = useState<string>("");
  const [itemType, setItemType] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [itemCode, setItemCode] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPhoto(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedAdmin || !itemType || !itemName || !itemCode || !description || !selectedFile || !photo) {
      alert("Please fill in all fields and upload required documents.");
      return;
    }

    alert(`Repair request submitted successfully to ${selectedAdmin}!`);
    navigate("/dashboard"); // Redirect to Dashboard after submission
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Request Repair</h1>

          {/* Download Repair Request Form */}
          <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
            <p className="text-lg mb-2">📄 Please download and complete the repair request form:</p>
            <a
              href="/mnt/data/Department_Repair_Request_Form.pdf"
              download
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              📥 Download Repair Request Form
            </a>
          </div>

          {/* Upload Section */}
          <form onSubmit={handleSubmit} className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-3">Repair Request Details</h2>

            {/* Item Name */}
            <div className="mb-4">
              <label className="block font-semibold">🛠 Item Name:</label>
              <input
                type="text"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>

            {/* Item Code */}
            <div className="mb-4">
              <label className="block font-semibold">🔢 Item Code:</label>
              <input
                type="text"
                placeholder="Enter item code"
                value={itemCode}
                onChange={(e) => setItemCode(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>

            {/* Description of the Issue */}
            <div className="mb-4">
              <label className="block font-semibold">📝 Description:</label>
              <textarea
                placeholder="Describe the issue"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>

            {/* Select Item Type */}
            <div className="mb-4">
              <label className="block font-semibold">🔍 Item Type:</label>
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              >
                <option value="">Select Item Type</option>
                <option value="Digital">Digital Equipment (Computers, Printers, etc.)</option>
                <option value="Fixed Asset">Fixed Asset (Furniture, Machines, etc.)</option>
              </select>
            </div>

            {/* Select Admin Type */}
            <div className="mb-4">
              <label className="block font-semibold">👤 Select Admin to Request Repair:</label>
              <select
                value={selectedAdmin}
                onChange={(e) => setSelectedAdmin(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              >
                <option value="">Select Admin</option>
                {itemType === "Digital" && <option value="Technical Officer">Technical Officer</option>}
                {itemType === "Fixed Asset" && <option value="Management Officer">Management Officer</option>}
              </select>
            </div>

            {/* Upload Repair Request Form */}
            <div className="mb-4">
              <label className="block font-semibold">📄 Upload Completed Repair Request Form:</label>
              <input type="file" accept=".pdf" onChange={handleFileChange} className="mt-2 border p-2 rounded w-full" />
              {selectedFile && <p className="text-sm text-green-600 mt-1">✔ {selectedFile.name} uploaded</p>}
            </div>

            {/* Upload Item Condition Photo */}
            <div className="mb-4">
              <label className="block font-semibold">📷 Upload Item Condition Photo:</label>
              <input type="file" accept="image/*" onChange={handlePhotoChange} className="mt-2 border p-2 rounded w-full" />
              {photo && <p className="text-sm text-green-600 mt-1">✔ {photo.name} uploaded</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700">
              🚀 Submit Repair Request
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestRepair;
