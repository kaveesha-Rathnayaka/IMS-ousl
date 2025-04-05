import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RequestForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};

  const [formData, setFormData] = useState({
    itemName: item?.name || "",
    itemCode: item?.id || "",
    reason: "",
    quantity: "",
    neededDate: "",
    requestDate: new Date().toISOString().split("T")[0], // today
    telephone: "",
  });

  useEffect(() => {
    if (!item) {
      alert("No item selected. Redirecting to inventory...");
      navigate("/browse-inventory");
    }
  }, [item, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting request:", formData);

    // ✅ Navigate to request confirmation page
    navigate("/request-confirmation", { state: { submitted: true, request: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-2">Request Form</h2>

        {/* Item Name */}
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            name="itemName"
            value={formData.itemName}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Item Code */}
        <div>
          <label className="block font-medium">Item Code</label>
          <input
            name="itemCode"
            value={formData.itemCode}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block font-medium">Reason for Request</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium">Number of Items</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            min={1}
          />
        </div>

        {/* Needed Date */}
        <div>
          <label className="block font-medium">Item Needed Date</label>
          <input
            type="date"
            name="neededDate"
            value={formData.neededDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Request Date */}
        <div>
          <label className="block font-medium">Request Date</label>
          <input
            name="requestDate"
            value={formData.requestDate}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Telephone */}
        <div>
          <label className="block font-medium">Telephone Number</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            📩 Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
