import { Menu, User } from "lucide-react";
import { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md flex items-center justify-between h-16 px-4">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="hidden lg:block border rounded-md px-3 py-1"
        />
      </div>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2"
        >
          <span className="hidden lg:block font-semibold">KENIL</span>
          <User />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10">
            {["Account", "Inbox", "Support", "Settings", "Logout"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
