import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const ChatAdmin: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Chat Support</h1>
          
          {/* Chat Messages */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p className="text-gray-700 font-semibold">Admin: <span className="text-gray-600">"How can I assist you today?"</span></p>
          </div>
          
          {/* Chat Input */}
          <textarea
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="📩 Type your message here..."
          ></textarea>
          
          {/* Send Button */}
          <button className="w-full bg-orange-600 text-white p-3 mt-2 rounded-lg hover:bg-orange-700">
            📤 Send
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChatAdmin;