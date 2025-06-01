import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

// -------------------- INTERFACES --------------------
interface Category {
  name: string;
  code: string;
}

interface InventoryItem {
  id: number;
  code: string;         // e.g. "FX-001"
  name: string;         // e.g. "Laptop"
  category: string;     // We store category name here (could store code also)
  quantity: number;
  status: string;
  description?: string;
  location?: string;
  warranty?: string;
  qrEnabled?: boolean;   // Whether we've enabled QR for this item
}

const AdminInventoryManagement: React.FC = () => {
  // -------------------- STATE --------------------
  const [categories, setCategories] = useState<Category[]>([
    { name: "Fixed Asset", code: "FA" },
    { name: "Stationary", code: "ST" },
  ]);

  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: 1,
      code: "FX-001",
      name: "Laptop",
      category: "Fixed Asset",
      quantity: 5,
      status: "Available",
      qrEnabled: false,
    },
    {
      id: 2,
      code: "ST-101",
      name: "Pen",
      category: "Stationary",
      quantity: 100,
      status: "Low Stock",
      qrEnabled: false,
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Add New Item Modal
  const [showModal, setShowModal] = useState(false);

  // Add Category Modal
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  // For the category form (name & code)
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryCode, setNewCategoryCode] = useState("");

  // For the new item form
  const [newItem, setNewItem] = useState({
    code: "",
    name: "",
    category: "",
    quantity: "",
    status: "",
    description: "",
    location: "",
    warranty: "",
    qrEnabled: false,  // <-- We'll track here if the user wants a QR
  });

  // -------------------- FILTERING --------------------
  const filteredInventory = inventory.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // -------------------- HANDLERS --------------------
  const handleAddNewItem = () => {
    const quantityAsNumber = parseInt(newItem.quantity, 10) || 0;

    // Create the new item
    const itemToAdd: InventoryItem = {
      id: inventory.length + 1,
      code: newItem.code,
      name: newItem.name,
      category: newItem.category,
      quantity: quantityAsNumber,
      status: newItem.status,
      description: newItem.description,
      location: newItem.location,
      warranty: newItem.warranty,
      qrEnabled: newItem.qrEnabled,
    };

    // If QR is enabled, do something for the generation
    if (itemToAdd.qrEnabled) {
      // Here is where you'd call your QR generation logic or library
      console.log("Generating QR code for item code:", itemToAdd.code);
      alert(`QR code generated for ${itemToAdd.name} (${itemToAdd.code}).`);
    }

    // Update the inventory list
    setInventory([...inventory, itemToAdd]);

    // Close the modal & reset the form
    setShowModal(false);
    setNewItem({
      code: "",
      name: "",
      category: "",
      quantity: "",
      status: "",
      description: "",
      location: "",
      warranty: "",
      qrEnabled: false,
    });
  };

  const handleAddCategory = () => {
    const trimmedName = newCategoryName.trim();
    const trimmedCode = newCategoryCode.trim();

    // Only add if name and code are non-empty and do not already exist
    if (
      trimmedName &&
      trimmedCode &&
      !categories.some(
        (cat) =>
          cat.name.toLowerCase() === trimmedName.toLowerCase() ||
          cat.code.toLowerCase() === trimmedCode.toLowerCase()
      )
    ) {
      setCategories([
        ...categories,
        { name: trimmedName, code: trimmedCode },
      ]);
    }

    // Reset & close modal
    setNewCategoryName("");
    setNewCategoryCode("");
    setShowCategoryModal(false);
  };

  // -------------------- RENDER --------------------
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">
            📦 Inventory Management
          </h1>

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
                  <option key={idx} value={cat.name}>
                    {cat.name} ({cat.code})
                  </option>
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
                onClick={() => setShowCategoryModal(true)}
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
                  <th className="p-3 text-left">Qty</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{item.code}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">{item.quantity}</td>
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
                          setInventory(inventory.filter((i) => i.id !== item.id));
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
                <h2 className="text-xl font-semibold text-orange-600 mb-4">
                  Add New Inventory Item
                </h2>

                <input
                  type="text"
                  placeholder="Item Code"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.code}
                  onChange={(e) =>
                    setNewItem({ ...newItem, code: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                  required
                />
                <select
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.category}
                  onChange={(e) =>
                    setNewItem({ ...newItem, category: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat.name}>
                      {cat.name} ({cat.code})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newItem.quantity}
                  onChange={(e) =>
                    setNewItem({ ...newItem, quantity: e.target.value })
                  }
                />
                <select
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={newItem.status}
                  onChange={(e) =>
                    setNewItem({ ...newItem, status: e.target.value })
                  }
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="In Use">In Use</option>
                  <option value="Condemned">Condemned</option>
                  <option value="Low Stock">Low Stock</option>
                </select>

                {/* Only show "Enable QR" if category is Fixed Asset */}
                {newItem.category === "Fixed Asset" && (
                  <div className="flex items-center mb-4 space-x-2">
                    <span>Enable QR Code for this item?</span>
                    <button
                      type="button"
                      onClick={() =>
                        setNewItem({ ...newItem, qrEnabled: true })
                      }
                    >
                      ✅
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setNewItem({ ...newItem, qrEnabled: false })
                      }
                    >
                      ❌
                    </button>
                  </div>
                )}

                <details className="mb-4">
                  <summary className="cursor-pointer text-sm text-gray-600 underline">
                    + Add Optional Fields
                  </summary>
                  <div className="mt-3 space-y-2">
                    <input
                      type="text"
                      placeholder="Item Description (Optional)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.description}
                      onChange={(e) =>
                        setNewItem({ ...newItem, description: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Location/Department (Optional)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.location}
                      onChange={(e) =>
                        setNewItem({ ...newItem, location: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Warranty Period (Months)"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newItem.warranty}
                      onChange={(e) =>
                        setNewItem({ ...newItem, warranty: e.target.value })
                      }
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
          {showCategoryModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">
                  Add New Category
                </h2>

                <input
                  type="text"
                  placeholder="Category Name"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Category Code"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={newCategoryCode}
                  onChange={(e) => setNewCategoryCode(e.target.value)}
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
