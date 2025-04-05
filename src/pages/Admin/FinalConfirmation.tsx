import React from "react";
import IssueLetter from "./IssueLetter"; // import the letter component

const FinalConfirmation: React.FC = () => {
  // Dummy signature image strings for example; replace with real base64 strings
  const hodSignatureBase64 = "data:image/png;base64,iVBORw0KGgoAAAANS..."; 
  const adminSignatureBase64 = "data:image/png;base64,iVBORw0KGgoAAAANS...";

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        ✅ Item Issued Successfully!
      </h2>
      <p className="mb-6">Both HOD and Admin signatures have been collected.</p>

      {/* Render the IssueLetter here */}
      <IssueLetter
        user="John Doe"
        item="Laptop"
        reason="For academic use"
        requestDate="2025-04-05"
        hodName="Dr. Samantha Silva"
        hodSignature={hodSignatureBase64}
        hodSignedAt="2025-04-05 11:10 AM"
        adminName="Mr. Kevin Jayasuriya"
        adminSignature={adminSignatureBase64}
        adminSignedAt="2025-04-05 11:20 AM"
      />
    </div>
  );
};

export default FinalConfirmation;
