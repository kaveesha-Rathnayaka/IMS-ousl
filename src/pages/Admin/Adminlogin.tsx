import React from "react";

const AdminLogin: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">University Inventory Admin Portal</h2>
        <input type="text" placeholder="Admin Email/Username" className="w-full p-3 mb-4 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-gray-300 rounded" />
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm"><input type="checkbox" className="mr-2" /> Remember Me</label>
          <a href="#" className="text-sm text-orange-600 hover:underline">Forgot Password?</a>
        </div>
        <button className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700">Login</button>
        <p className="mt-4 text-sm text-green-600">🔒 Two-Factor Authentication Enabled</p>
        <p className="mt-4 text-sm">
          <a href="/admin-dashboard" className="text-orange-600 hover:underline">Back to User Login</a>
        </p>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-gray-600 py-4 bg-white mt-6 shadow-md">
        © 2025 University Inventory System - Admin | <a href="#" className="text-orange-600 hover:underline">Terms</a> | <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default AdminLogin;
