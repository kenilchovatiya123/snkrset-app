import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";

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
      className={`fixed left-0 top-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <Link to="/dashboard" className="text-2xl font-bold">
          SNKR
        </Link>
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>
      <nav className="mt-4 px-4 space-y-2">
        {navLinks.map((link, index) =>
          link.submenu ? (
            <div key={index}>
              <button
                className="flex justify-between items-center w-full"
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
                <div className="ml-4 mt-1">
                  {link.submenu.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sublink.to}
                      className="block py-1 hover:underline"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={index} to={link.to} className="block hover:underline">
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default AdminSidebar;
