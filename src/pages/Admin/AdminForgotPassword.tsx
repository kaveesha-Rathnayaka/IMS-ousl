import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your registered admin email to receive a reset link.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ousl.lk"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div>
            <p className="text-green-600 text-sm mb-4">✅ A reset link has been sent to your email.</p>
            <button
              onClick={() => navigate("/admin-login")}
              className="text-orange-600 hover:underline text-sm"
            >
              ← Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminForgotPassword;
