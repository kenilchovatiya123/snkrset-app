import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { assets } from "../assets/assets";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const navLinks = [
    { label: "DASHBOARD", to: "/dashboard" },
    {
      label: "PRODUCTS",
      submenu: [{ label: "PRODUCT LIST", to: "/list" }],
    },
    { label: "CATEGORIES", to: "/categories" },
    { label: "ORDERS", to: "/orders" },
    { label: "CUSTOMERS", to: "/customers" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-white sm:shadow-lg text-black z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
        <div className="flex items-center gap-1">
          <img src={assets.logo} className="w-8 h-8 rounded-sm" alt="" />
          <Link to="/dashboard" className="text-4xl font-bold tracking-[-3px]">
            SNKR
          </Link>
        </div>

        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>
      <nav className="mt-8 px-4 space-y-4">
        {navLinks.map((link, index) =>
          link.submenu ? (
            <div key={index}>
              <button
                className="flex justify-between items-center w-full custom-font hover:bg-gray-100 py-1 px-1 hover:rounded-sm"
                onClick={() => setProductMenuOpen(!isProductMenuOpen)}
              >
                {link.label}
                <ChevronDown
                  className={`transition ${
                    isProductMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductMenuOpen && (
                <div className="ml-4 mt-2">
                  {link.submenu.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sublink.to}
                      className="block py-1 custom-font text-[14px]"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to={link.to}
              className="block custom-font hover:bg-gray-100 py-0.5 px-1 hover:rounded-sm"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default AdminSidebar;
