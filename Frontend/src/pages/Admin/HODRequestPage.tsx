import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HODRequestPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, item, reason, datetime } = location.state || {};

  const handleApprove = () => {
    alert("✅ HOD approved. Proceed to signature.");
    navigate("/digital-sign?by=hod", {
      state: { user, item, step: "hod" },
    });
  };

  const handleReject = () => {
    alert("❌ HOD rejected the request.");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">📥 Request Approval</h2>
      <div className="bg-white shadow rounded p-4 space-y-2">
        <p><strong>User:</strong> {user}</p>
        <p><strong>Item:</strong> {item}</p>
        <p><strong>Reason:</strong> {reason}</p>
        <p><strong>Date/Time:</strong> {datetime}</p>

        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">👤 User Details</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">📦 Item Details</button>
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={handleApprove} className="bg-green-600 text-white px-4 py-2 rounded">✅ Approve & Sign</button>
          <button onClick={handleReject} className="bg-red-600 text-white px-4 py-2 rounded">❌ Reject</button>
        </div>
      </div>
    </div>
  );
};

export default HODRequestPage;
