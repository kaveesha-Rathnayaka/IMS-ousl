import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const GenerateEmails: React.FC = () => {
  const [emailData, setEmailData] = useState({
    recipients: "",
    subject: "",
    message: "",
    attachment: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setEmailData({ ...emailData, attachment: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Email composed successfully and ready to send!");
    console.log(emailData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">📧 Compose & Send Email</h1>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-2xl">
            <div>
              <label className="block font-semibold mb-1">To (Recipients)</label>
              <input
                type="text"
                name="recipients"
                placeholder="example@university.com"
                className="w-full p-2 border border-gray-300 rounded"
                value={emailData.recipients}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 border border-gray-300 rounded"
                value={emailData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows={6}
                className="w-full p-2 border border-gray-300 rounded"
                value={emailData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Attachment (optional)</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              Send Email
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GenerateEmails;
