import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

// Sample data across different dates and items
const allData = [
  { id: 1, item: "A4 Paper", brought: 200, used: 120, date: "2025-04-01" },
  { id: 2, item: "A4 Paper", brought: 300, used: 150, date: "2025-03-30" },
  { id: 3, item: "Toner", brought: 20, used: 10, date: "2025-03-29" },
  { id: 4, item: "Notebook", brought: 150, used: 100, date: "2025-03-28" },
  { id: 5, item: "A4 Paper", brought: 100, used: 80, date: "2025-03-27" },
  { id: 6, item: "Toner", brought: 15, used: 5, date: "2025-03-25" },
  { id: 7, item: "Notebook", brought: 200, used: 190, date: "2025-03-20" },
];

const AdminReportsAnalytics: React.FC = () => {
  const [filter, setFilter] = useState("Daily");
  const [selectedItem, setSelectedItem] = useState("All");

  const today = new Date("2025-04-01");

  const filterByDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const diff = (today.getTime() - date.getTime()) / (1000 * 3600 * 24);
    switch (filter) {
      case "Daily": return diff < 1;
      case "Weekly": return diff < 7;
      case "Monthly": return diff < 30;
      case "Yearly": return diff < 365;
      default: return true;
    }
  };

  const getFilteredData = () => {
    let filtered = allData.filter(d => filterByDate(d.date));
    if (selectedItem !== "All") {
      filtered = filtered.filter(d => d.item === selectedItem);
    }
    return filtered;
  };

  const filteredData = getFilteredData();
  const uniqueItems = ["All", ...Array.from(new Set(allData.map(item => item.item)))];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Inventory Report", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Item", "Brought", "Used", "Date"]],
      body: filteredData.map(row => [row.item, row.brought, row.used, row.date])
    });
    doc.save("report.pdf");
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "report.xlsx");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">📊 Reports & Analytics</h1>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap mb-4">
            {["Daily", "Weekly", "Monthly", "Yearly"].map(period => (
              <button
                key={period}
                className={`px-4 py-2 rounded-lg ${filter === period ? "bg-orange-600 text-white" : "bg-white text-orange-600 border border-orange-600"}`}
                onClick={() => setFilter(period)}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Item Filter */}
          <div className="mb-4">
            <label className="font-semibold text-sm">Filter by Item:</label>
            <select
              className="ml-2 p-2 border border-gray-300 rounded"
              value={selectedItem}
              onChange={e => setSelectedItem(e.target.value)}
            >
              {uniqueItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Table */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="p-3">Item</th>
                  <th className="p-3">Brought</th>
                  <th className="p-3">Used</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(row => (
                  <tr key={row.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{row.item}</td>
                    <td className="p-3">{row.brought}</td>
                    <td className="p-3">{row.used}</td>
                    <td className="p-3">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Export Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={exportExcel}
            >📁 Export to Excel</button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={downloadPDF}
            >📄 Download PDF</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminReportsAnalytics;
