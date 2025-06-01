import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const UpdateRepairingItems: React.FC = () => {
  const [repairItems, setRepairItems] = useState([
    { id: 1, itemCode: "FX-1001", name: "Laptop", status: "Pending" },
    { id: 2, itemCode: "FX-1003", name: "Projector", status: "In Progress" },
  ]);

  const [receiptFiles, setReceiptFiles] = useState<{ [key: number]: File | null }>({});

  const handleStatusChange = (id: number, newStatus: string) => {
    const updated = repairItems.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setRepairItems(updated);
  };

  const handleFileUpload = (id: number, file: File | null) => {
    setReceiptFiles({ ...receiptFiles, [id]: file });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Update Repairing Items</h1>

          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Item Code</th>
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Repair Status</th>
                  <th className="p-3">Upload Receipt</th>
                </tr>
              </thead>
              <tbody>
                {repairItems.map(item => (
                  <tr key={item.id} className="border-t">
                    <td className="p-3">{item.itemCode}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Repaired</option>
                        <option>Not Repairable</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(item.id, e.target.files?.[0] || null)}
                      />
                    </td>
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

export default UpdateRepairingItems;
