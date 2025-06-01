import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const RequestsApprovals: React.FC = () => {
  const navigate = useNavigate();

  // Dummy data with category and status
  const [requests] = useState([
    {
      user: "Sunil",
      item: "Laptop",
      date: "2025-03-01",
      status: "Pending",
      category: "Item Request",
      type: "Fixed",
    },
    {
      user: "Sunil",
      item: "Projector",
      date: "2025-03-02",
      status: "Approved",
      category: "Repair Request",
      type: "Fixed",
    },
    {
      user: "Nimal",
      item: "Pen",
      date: "2025-03-03",
      status: "Pending",
      category: "Return Request",
      type: "Consumable",
    },
    {
      user: "Kamal",
      item: "Chair",
      date: "2025-03-05",
      status: "Rejected",
      category: "Change Request",
      type: "Fixed",
    },
  ]);

  // State for filtering
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Handlers
  const handleSendNotification = () => {
    alert("📩 Notification sent to selected users!");
  };

  const handleViewHistory = () => {
    navigate("/request-history");
  };

  const handleApprove = (user: string, item: string) => {
    alert(`✅ Approved ${item} for ${user}`);
  };

  const handleReject = (user: string, item: string) => {
    alert(`❌ Rejected ${item} for ${user}`);
  };

  const handleVerify = (user: string, item: string) => {
    alert(`🔍 Verifying ${item} request from ${user}`);
    navigate("/hod-request");
  };

  // Filter the requests based on status and category
  const filteredRequests = requests.filter((req) => {
    // If statusFilter != "All" and the request's status doesn't match, hide it
    if (statusFilter !== "All" && req.status !== statusFilter) {
      return false;
    }
    // If categoryFilter != "All" and the request's category doesn't match, hide it
    if (categoryFilter !== "All" && req.category !== categoryFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Requests & Approvals</h1>

          {/* Requests Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>🛒 Total Requests: {requests.length}</div>
            <div>✅ Approved: {requests.filter((r) => r.status === "Approved").length}</div>
            <div>⏳ Pending: {requests.filter((r) => r.status === "Pending").length}</div>
          </div>

          {/* STATUS Filter Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                statusFilter === "All" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setStatusFilter("All")}
            >
              All Status
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                statusFilter === "Pending" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setStatusFilter("Pending")}
            >
              Pending
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                statusFilter === "Approved" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setStatusFilter("Approved")}
            >
              Approved
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                statusFilter === "Rejected" ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setStatusFilter("Rejected")}
            >
              Rejected
            </button>
          </div>

          {/* CATEGORY Filter Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                categoryFilter === "All" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategoryFilter("All")}
            >
              All Categories
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                categoryFilter === "Item Request" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategoryFilter("Item Request")}
            >
              Item Request
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                categoryFilter === "Repair Request" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategoryFilter("Repair Request")}
            >
              Repair Request
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                categoryFilter === "Return Request" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategoryFilter("Return Request")}
            >
              Return Request
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                categoryFilter === "Change Request" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setCategoryFilter("Change Request")}
            >
              Change Request
            </button>
          </div>

          {/* Requests Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">User</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Request Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{req.user}</td>
                    <td className="p-3">{req.item}</td>
                    <td className="p-3">{req.date}</td>
                    <td className="p-3">
                      {req.status === "Pending" && <span className="text-yellow-600">⏳ Pending</span>}
                      {req.status === "Approved" && <span className="text-green-600">✅ Approved</span>}
                      {req.status === "Rejected" && <span className="text-red-600">❌ Rejected</span>}
                    </td>
                    <td className="p-3">{req.category}</td>
                    <td className="p-3 space-x-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => handleApprove(req.user, req.item)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleReject(req.user, req.item)}
                      >
                        Reject
                      </button>
                      {/* Show "Verify" only if item is "Fixed" */}
                      {req.type === "Fixed" && (
                        <button
                          className="bg-purple-600 text-white px-3 py-1 rounded"
                          onClick={() => handleVerify(req.user, req.item)}
                        >
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {/* If no requests match the filters */}
                {filteredRequests.length === 0 && (
                  <tr>
                    <td className="p-3 text-center" colSpan={6}>
                      No requests found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSendNotification}
            >
              📩 Send Notification
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={handleViewHistory}
            >
              📜 View Request History
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestsApprovals;
