import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

interface User {
  id: number;
  name: string;
  email: string;    // must be @ousl.lk
  role: string;     // "head of department", "management assistant", "technical officer", "staff", etc.
  status: string;   // "Active", "Disabled", etc.
}

const UserManagement: React.FC = () => {
  // ---------------------- SAMPLE DATA ----------------------
  // These are your two primary users:
  // 1) Head of Department: Malinda Punchihewa
  // 2) Management Assistant: Udara Bandara
  // Both use @ousl.lk emails
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Malinda Punchihewa",
      email: "malinda@ousl.lk",
      role: "head of department",
      status: "Active",
    },
    {
      id: 2,
      name: "Udara Bandara",
      email: "udara@ousl.lk",
      role: "management assistant",
      status: "Active",
    },
    // Example staff user:
    {
      id: 3,
      name: "Keerthi Perera",
      email: "keerthi@ousl.lk",
      role: "technical officer",
      status: "Active",
    },
  ]);

  // For searching by name or email
  const [searchTerm, setSearchTerm] = useState("");

  // For filtering by role
  const [roleFilter, setRoleFilter] = useState("All");

  // Example roles you want to support
  const roles = [
    "head of department",
    "management assistant",
    "technical officer",
    "staff",
  ];

  // ---------------------- ADD/EDIT USER MODAL ----------------------
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Holds form values for new or editing user
  const [modalUser, setModalUser] = useState<Partial<User>>({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  // Open modal to add a new user
  const handleOpenAddUserModal = () => {
    setEditingUser(null);
    setModalUser({
      name: "",
      email: "",
      role: "",
      status: "Active",
    });
    setShowUserModal(true);
  };

  // Open modal to edit an existing user
  const handleOpenEditUserModal = (user: User) => {
    setEditingUser(user);
    setModalUser({ ...user });
    setShowUserModal(true);
  };

  // Save a new user or apply edits to existing user
  const handleSaveUser = () => {
    // Basic validation
    if (!modalUser.name || !modalUser.email || !modalUser.role) {
      alert("Name, Email, and Role are required.");
      return;
    }

    // If you want to enforce @ousl.lk emails, you can do:
    if (!modalUser.email.endsWith("@ousl.lk")) {
      alert("Email must be an OUSL email (ending with @ousl.lk).");
      return;
    }

    // Check if editing an existing user
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...u, ...modalUser } : u))
      );
    } else {
      // Add a new user
      const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      const newUser: User = {
        id: newId,
        name: modalUser.name!,
        email: modalUser.email!,
        role: modalUser.role!,
        status: modalUser.status || "Active",
      };
      setUsers([...users, newUser]);
    }

    // Close modal
    setShowUserModal(false);
    setEditingUser(null);
  };

  // ---------------------- FILTER + SEARCH LOGIC ----------------------
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar & Header */}
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />

        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">User Management</h1>

          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>
              👥 Total Users: <strong>{users.length}</strong>
            </div>
            <div>
              🔐 HOD:{" "}
              <strong>
                {users.filter((u) => u.role === "head of department").length}
              </strong>
            </div>
            <div>
              🛠 Management Assistants:{" "}
              <strong>
                {users.filter((u) => u.role === "management assistant").length}
              </strong>
            </div>
          </div>

          {/* Search, Role Filter, and Add User Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Role Filter */}
            <select
              className="p-2 border border-gray-300 rounded"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              {roles.map((roleOption) => (
                <option key={roleOption} value={roleOption}>
                  {roleOption}
                </option>
              ))}
            </select>

            {/* Search Field */}
            <input
              type="text"
              placeholder="🔍 Search by name or email..."
              className="p-2 border border-gray-300 rounded flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Add User Button */}
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
              onClick={handleOpenAddUserModal}
            >
              ➕ Add User
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3 capitalize">{user.role}</td>
                    <td
                      className={`p-3 ${
                        user.status === "Active" ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="p-3 space-x-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleOpenEditUserModal(user)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() =>
                          alert(`Disable or remove user: ${user.name}`)
                        }
                      >
                        🚫 Disable
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-3 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </div>

      {/* Add/Edit User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              {editingUser ? "Edit User" : "Add New User"}
            </h2>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="User Name"
                className="w-full p-2 border border-gray-300 rounded"
                value={modalUser.name || ""}
                onChange={(e) => setModalUser({ ...modalUser, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email (must be @ousl.lk)"
                className="w-full p-2 border border-gray-300 rounded"
                value={modalUser.email || ""}
                onChange={(e) => setModalUser({ ...modalUser, email: e.target.value })}
              />
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={modalUser.role || ""}
                onChange={(e) => setModalUser({ ...modalUser, role: e.target.value })}
              >
                <option value="">Select Role</option>
                {roles.map((roleOption) => (
                  <option key={roleOption} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={modalUser.status || "Active"}
                onChange={(e) => setModalUser({ ...modalUser, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => {
                  setShowUserModal(false);
                  setEditingUser(null);
                }}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
