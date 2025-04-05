import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const RequestsApprovals: React.FC = () => {
  const navigate = useNavigate();

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

  // Dummy data (you can expand this with a category/type if available)
  const requests = [
    { user: "John Doe", item: "Laptop", date: "2025-03-01", status: "Pending", type: "Fixed" },
    { user: "Jane Doe", item: "Projector", date: "2025-03-02", status: "Pending", type: "Fixed" },
    { user: "Alex Smith", item: "Pen", date: "2025-03-03", status: "Pending", type: "Consumable" },
  ];

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
            <div>✅ Approved: 8</div>
            <div>⏳ Pending: {requests.length}</div>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">🔍 Filter by: Pending</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">✅ Filter by: Approved</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">❌ Filter by: Rejected</button>
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
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{req.user}</td>
                    <td className="p-3">{req.item}</td>
                    <td className="p-3">{req.date}</td>
                    <td className="p-3 text-yellow-600">⏳ {req.status}</td>
                    <td className="p-3 space-x-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => handleApprove(req.user, req.item)}
                      >
                        ✅ Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleReject(req.user, req.item)}
                      >
                        ❌ Reject
                      </button>
                      {req.type === "Fixed" && ( // Only show verify for Fixed items
                        <button
                          className="bg-purple-600 text-white px-3 py-1 rounded"
                          onClick={() => handleVerify(req.user, req.item)}
                        >
                          🔍 Verify
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
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
