import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const ReportsAnalytics: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600">Reports & Analytics</h1>
          
          {/* Reports Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded-lg mt-4">
            <div>📊 Total Reports: 10</div>
            <div>📈 System Performance: Stable</div>
            <div>📉 Pending Issues: 2</div>
          </div>

          {/* Inventory Usage Trends Graph Placeholder */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6 text-center">
            <h2 className="text-lg font-bold mb-4">📈 Inventory Usage Trends</h2>
            <p className="text-gray-500">[Graph Placeholder]</p>
          </div>

          {/* Reports Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3">Date</th>
                  <th className="p-3">Report Type</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">2025-03-01</td>
                  <td className="p-3">Monthly Usage Report</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">📥 Download PDF</button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">2025-02-28</td>
                  <td className="p-3">User Activity Report</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">📥 Download CSV</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">📌 Generate New Report</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">📥 Export Data</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReportsAnalytics;
