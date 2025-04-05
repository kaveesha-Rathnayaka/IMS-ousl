import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const QRCodeReader: React.FC = () => {
  const [scannedCode, setScannedCode] = useState("");
  const [itemDetails, setItemDetails] = useState<any>(null);

  const handleScan = () => {
    // Simulate scanning a QR code and fetching item details
    const sampleItem = {
      code: "FX-1001",
      name: "Laptop",
      category: "Fixed Asset",
      status: "Available",
      location: "Lab A"
    };
    setScannedCode(sampleItem.code);
    setItemDetails(sampleItem);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">QR Code Scanner</h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              onClick={handleScan}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 mb-4"
            >
              📷 Simulate QR Scan
            </button>

            {itemDetails ? (
              <div className="border-t pt-4">
                <h2 className="text-lg font-bold mb-2 text-gray-800">Item Details</h2>
                <p><strong>Item Code:</strong> {itemDetails.code}</p>
                <p><strong>Name:</strong> {itemDetails.name}</p>
                <p><strong>Category:</strong> {itemDetails.category}</p>
                <p><strong>Status:</strong> {itemDetails.status}</p>
                <p><strong>Location:</strong> {itemDetails.location}</p>
              </div>
            ) : (
              <p className="text-gray-500">No item scanned yet.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default QRCodeReader;
