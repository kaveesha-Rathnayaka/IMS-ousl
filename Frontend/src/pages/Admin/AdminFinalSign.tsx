import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminFinalSign: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, item } = location.state || {};

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl text-orange-600 font-semibold mb-4">Admin Signature Required</h2>
      <button
        className="bg-orange-600 text-white px-6 py-2 rounded"
        onClick={() => navigate("/digital-sign?by=admin", { state: { user, item } })}
      >
        ✍️ Continue to Sign
      </button>
    </div>
  );
};

export default AdminFinalSign;
