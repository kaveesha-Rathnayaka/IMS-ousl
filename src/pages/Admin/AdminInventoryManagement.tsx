import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminInventoryManagement: React.FC = () => {
  const [inventory, setInventory] = useState([
    { id: 1, code: "FX-001", name: "Laptop", category: "Fixed Asset", status: "Available" },
    { id: 2, code: "ST-101", name: "Pen", category: "Stationary", status: "Low Stock" },
  ]);

  const [categories, setCategories] = useState(["Fixed Asset", "Stationary"]); // 🆕
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false); // 🆕

  const [newCategory, setNewCategory] = useState(""); // 🆕

  const [newItem, setNewItem] = useState({
    code: "",
    name: "",
    category: "",
    status: "",
    description: "",
    location: "",
    warranty: "",
  });

  const filteredInventory = inventory.filter(item => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddNewItem = () => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
    setShowModal(false);
    setNewItem({
      code: "",
      name: "",
      category: "",
      status: "",
      description: "",
      location: "",
      warranty: "",
    });
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
    }
    setNewCategory("");
    setShowCategoryModal(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">📦 Inventory Management</h1>

          {/* Filter + Search + Add Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex space-x-3">
              <select
                className="p-2 border border-gray-300 rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search by name or code..."
                className="p-2 border border-gray-300 rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCategoryModal(true)} // 🆕
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                ➕ Add Category
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                ➕ Add New Item
              </button>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="p-3 text-left">Item Code</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map(item => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{item.code}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => alert(`Edit item with ID: ${item.id}`)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => {
                          setInventory(inventory.filter(i => i.id !== item.id));
                          alert("Item deleted.");
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        🗑 Delete
                      </button>
                      <button
                        onClick={() => alert(`Restock item with ID: ${item.id}`)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        ♻️ Restock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Item Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-semibold text-orange-600 mb-4">Add New Inventory Item</h2>

                <input
                  type="text"
                  placeholder="Item Code"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.code}
                  onChange={(e) => setNewItem({ ...newItem, code: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  required
                />
                <select
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={newItem.status}
                  onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="In Use">In Use</option>
                  <option value="Condemned">Condemned</option>
                </select>

                <details className="mb-4">
                  <summary className="cursor-pointer text-sm text-gray-600 underline">+ Add Optional Fields</summary>
                  <div className="mt-3 space-y-2">
                    <input
                      type="text"
                      placeholder="Item Description (Optional)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.description}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Location/Department (Optional)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.location}
                      onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Warranty Period (Months)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.warranty}
                      onChange={(e) => setNewItem({ ...newItem, warranty: e.target.value })}
                    />
                  </div>
                </details>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddNewItem}
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add Category Modal */}
          {showCategoryModal && ( // 🆕
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">Add New Category</h2>
                <input
                  type="text"
                  placeholder="Category Name"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowCategoryModal(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddCategory}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminInventoryManagement;
