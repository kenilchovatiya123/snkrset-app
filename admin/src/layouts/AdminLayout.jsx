import { useState } from "react";
import Sidebar from "../layouts/AdminSidebar";
import Navbar from "../layouts/AdminNavbar";
import { Route, Routes } from "react-router-dom";
import List from "../pages/List";
import Add from "../pages/Add";
import Orders from "../pages/Orders";
import AdminDashboard from "../layouts/AdminDashboard";
import Edit from "../pages/Edit";

const AdminLayout = ({ children, token }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 transition-all duration-300 px-4 sm:px-6 md:px-8 py-6 ml-0 lg:ml-64 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<List token={token} />} />
            <Route
              path="/dashboard"
              element={<AdminDashboard token={token} />}
            />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
            <Route path="/edit/:id" element={<Edit token={token} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
