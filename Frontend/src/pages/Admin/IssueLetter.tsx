import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface IssueLetterProps {
  user: string;
  item: string;
  reason: string;
  requestDate: string;
  hodName: string;
  hodSignature: string; // base64 image string
  hodSignedAt: string;
  adminName: string;
  adminSignature: string; // base64 image string
  adminSignedAt: string;
}

const IssueLetter: React.FC<IssueLetterProps> = ({
  user,
  item,
  reason,
  requestDate,
  hodName,
  hodSignature,
  hodSignedAt,
  adminName,
  adminSignature,
  adminSignedAt,
}) => {
  const letterRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const element = letterRef.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("issued-item-letter.pdf");
  };

  return (
    <div className="p-6">
      <div
        ref={letterRef}
        className="bg-white shadow p-6 rounded max-w-2xl mx-auto text-black space-y-4 border border-gray-300"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          📄 University Inventory Issue Approval
        </h2>

        <p><strong>📌 Requested By:</strong> {user}</p>
        <p><strong>📦 Item:</strong> {item}</p>
        <p><strong>📝 Reason:</strong> {reason}</p>
        <p><strong>📅 Request Date:</strong> {requestDate}</p>

        <hr className="my-4" />

        <p><strong>👨‍🏫 Head of Department:</strong> {hodName}</p>
        <p><strong>🕒 Signed on:</strong> {hodSignedAt}</p>
        <img src={hodSignature} alt="HOD Signature" className="h-20 mt-2" />

        <hr className="my-4" />

        <p><strong>🧑‍💼 Admin Officer:</strong> {adminName}</p>
        <p><strong>🕒 Signed on:</strong> {adminSignedAt}</p>
        <img src={adminSignature} alt="Admin Signature" className="h-20 mt-2" />

        <p className="text-sm text-gray-600 mt-6">
          This document serves as proof of approval and official item issuance.
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          ⬇️ Download Letter as PDF
        </button>
      </div>
    </div>
  );
};

export default IssueLetter;
