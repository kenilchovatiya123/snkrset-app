// src/layouts/AdminLayout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/AdminNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import List from "../pages/List";
import Add from "../pages/Add";
import Orders from "../pages/Orders";

const AdminLayout = ({ token }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
      case "/list":
        return "Product List";
      case "/add":
        return "Add Product";
      case "/orders":
        return "Orders";
      default:
        return "";
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-6 ml-[250px]">
        <Navbar pageTitle={getPageTitle()} />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<List token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
