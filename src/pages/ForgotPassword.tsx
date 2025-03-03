import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate(); // ✅ Use React Router for navigation
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ State to track form submission

  const handleReset = () => {
    if (email) {
      alert(`Password reset link has been sent to ${email}`);
      setIsSubmitted(true); // ✅ Show the "OK" button after submission
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">Forgot Password</h2>

        {!isSubmitted ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700"
              onClick={handleReset}
            >
              Send New Password
            </button>
          </>
        ) : (
          <>
            <p className="text-green-600 font-bold mb-4">✅ Password reset link sent successfully!</p>
            <button
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/")} // ✅ Redirect to Login after clicking "OK"
            >
              OK
            </button>
          </>
        )}

        <p className="mt-4 text-sm">
          <button 
            className="text-orange-600 hover:underline" 
            onClick={() => navigate("/")} // ✅ Back to Login button
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
