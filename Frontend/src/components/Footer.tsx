import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-6 md:mt-10 text-center text-gray-600 text-sm md:text-base">
      © 2025 University Inventory System | 
      <a href="#" className="text-orange-600 hover:underline"> Terms </a> | 
      <a href="#" className="text-orange-600 hover:underline"> Privacy Policy </a> | 
      <a href="#" className="text-orange-600 hover:underline"> Support Contact </a>
    </footer>
  );
};

export default Footer;
