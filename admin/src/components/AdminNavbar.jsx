import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets"; // Search icon from React Icons

const AdminNavbar = () => {
  // const [showSearch, setShowSearch] = useState(false);
  // const [query, setQuery] = useState("");
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes("list")) return "Product List";
    if (location.pathname.includes("categories")) return "Categories";
    if (location.pathname.includes("orders")) return "Orders";
    if (location.pathname.includes("sales")) return "Sales";
    if (location.pathname.includes("customers")) return "Customers";
    if (location.pathname.includes("settings")) return "Settings";
    return "Dashboard";
  };

  return (
    <div className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      {/* Left: Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
    </div>
  );
};

export default AdminNavbar;
