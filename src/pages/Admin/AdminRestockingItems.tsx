import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const UpdateRestockingItems: React.FC = () => {
  const [restockList, setRestockList] = useState([
    { id: 1, item: "Pens", stockLeft: 5 },
    { id: 2, item: "Staplers", stockLeft: 3 },
    { id: 3, item: "Markers", stockLeft: 2 },
  ]);

  const [restockForm, setRestockForm] = useState({
    itemId: "",
    quantity: "",
    supplier: "",
    cost: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRestockForm({ ...restockForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Restocking details updated successfully!");
    setRestockForm({ itemId: "", quantity: "", supplier: "", cost: "" });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Update Restocking Items Details</h1>

          {/* Low Stock Alerts */}
          <div className="bg-white p-4 shadow-md rounded-lg mb-6">
            <h2 className="text-lg font-bold mb-2">🔔 Low Stock Alerts</h2>
            <ul className="list-disc ml-5 text-red-600">
              {restockList.map((item) => (
                <li key={item.id}>{item.item} - Only {item.stockLeft} left</li>
              ))}
            </ul>
          </div>

          {/* Restocking Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">📦 Add Restocking Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Select Item</label>
                <select
                  name="itemId"
                  value={restockForm.itemId}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">-- Select Item --</option>
                  {restockList.map((item) => (
                    <option key={item.id} value={item.id}>{item.item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={restockForm.quantity}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={restockForm.supplier}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Total Cost</label>
                <input
                  type="number"
                  name="cost"
                  value={restockForm.cost}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                ✅ Save Restocking Info
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UpdateRestockingItems;
