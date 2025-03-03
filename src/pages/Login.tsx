import React from "react";
import { useNavigate } from "react-router-dom";
import universityLogo from "../assets/open-university-logo.jpg"; // Ensure you have the logo image in the assets folder

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // Redirect to Dashboard if login is successful
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-gray-100 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg text-center">
        {/* University Logo */}
        <img src={universityLogo} alt="University Logo" className="w-24 sm:w-28 mx-auto mb-6" />

        {/* Title */}
        <h2 className="text-3xl font-bold text-orange-600">The Open University of Sri Lanka</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-2">Inventory Management System</h3>

        {/* Input Fields */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="📧 Username or Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="🔑 Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mb-4 text-sm sm:text-base">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember Me
          </label>
          <button
            className="text-orange-600 hover:underline font-semibold"
            onClick={() => navigate("/forgot-password")}
          >
            🔑 Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 hover:shadow-lg transition duration-200 text-base font-semibold"
          onClick={handleLogin}
        >
          🚀 Sign In
        </button>

        {/* Register Link */}
        <p className="mt-4 text-base">
          🆕 New User?{" "}
          <button
            className="text-orange-600 hover:underline font-semibold"
            onClick={() => navigate("/register")}
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
