import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (user.name && user.email && user.password) {
      alert("Account registered successfully! Redirecting to Dashboard...");
      navigate("/dashboard"); // ✅ Redirects to Dashboard after successful registration
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">User Registration</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <button
          className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="mt-4 text-sm">
          <button 
            className="text-orange-600 hover:underline" 
            onClick={() => navigate("/")} // ✅ Redirects to Login
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
