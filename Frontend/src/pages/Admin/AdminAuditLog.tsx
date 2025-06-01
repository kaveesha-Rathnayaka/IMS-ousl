import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AuditLog: React.FC = () => {
  const [logs] = useState([
    { id: 1, user: "admin@ousl.lk", action: "Approved item request", date: "2025-03-24 10:05" },
    { id: 2, user: "admin@ousl.lk", action: "Edited inventory item", date: "2025-03-23 14:12" },
    { id: 3, user: "staff@ousl.lk", action: "Requested return", date: "2025-03-22 09:30" },
  ]);
  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter(
    (log) =>
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.date.includes(search)
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">📜 Audit Logs</h1>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by user, action or date..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">User</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{log.user}</td>
                      <td className="p-3">{log.action}</td>
                      <td className="p-3">{log.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center text-gray-500 p-4">
                      No logs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AuditLog;
