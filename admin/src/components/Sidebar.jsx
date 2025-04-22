import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom"; // Ensure the assets are correctly imported

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); // optional, to reset everything
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="p-4 flex items-center space-x-2">
          <img src={assets.logo} alt="Logo" className="h-10" />
          <span className="text-xl font-semibold">Admin Panel</span>
        </div>

        {/* Nav Items */}
        <nav className="px-4 space-y-2">
          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${
              isActive("/") && "bg-gray-100"
            }`}
          >
            <img
              src={assets.dashboard_icon}
              className="w-5 h-5"
              alt="Dashboard"
            />
            <span>Dashboard</span>
          </Link>

          {/* Products Dropdown */}
          <button
            onClick={() => setOpenProducts(!openProducts)}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <img
                src={assets.product_icon}
                className="w-5 h-5"
                alt="Products"
              />
              <span>Products</span>
            </div>
            <img
              src={assets.downarrow_icon}
              className={`w-4 h-4 transform transition-transform ${
                openProducts ? "rotate-180" : ""
              }`}
              alt="Toggle"
            />
          </button>

          {openProducts && (
            <div className="ml-8 space-y-1">
              <Link
                to="/list"
                className={`block p-1 text-sm rounded-md hover:bg-gray-100 ${
                  isActive("/list") && "bg-gray-100"
                }`}
              >
                Product List
              </Link>
              <Link
                to="/admin/categories"
                className={`block p-1 text-sm rounded-md hover:bg-gray-100 ${
                  isActive("/admin/categories") && "bg-gray-100"
                }`}
              >
                Categories
              </Link>
            </div>
          )}

          {/* Sales Section */}
          <Link
            to="/orders"
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${
              isActive("/orders") && "bg-gray-100"
            }`}
          >
            <img src={assets.sale_icon} className="w-5 h-5" alt="Sales" />
            <span>Orders</span>
          </Link>

          {/* Customers Section */}
          <Link
            to="/admin/customers"
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${
              isActive("/admin/customers") && "bg-gray-100"
            }`}
          >
            <img
              src={assets.customer_icon}
              className="w-5 h-5"
              alt="Customers"
            />
            <span>Customers</span>
          </Link>

          {/* Settings Section */}
          <Link
            to="/admin/settings"
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${
              isActive("/admin/settings") && "bg-gray-100"
            }`}
          >
            <img src={assets.setting_icon} className="w-5 h-5" alt="Settings" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-2 text-red-500 hover:bg-red-100 rounded-md"
        >
          <img src={assets.logout_icon} className="w-5 h-5" alt="Logout" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
