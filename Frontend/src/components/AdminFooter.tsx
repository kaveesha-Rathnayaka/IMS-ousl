import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full text-center text-gray-600 py-3 bg-white shadow-md"
      style={{ zIndex: 10 }}
    >
      © 2025 University Inventory System | Terms | Privacy Policy | Support Contact
    </footer>
  );
};

export default Footer;
