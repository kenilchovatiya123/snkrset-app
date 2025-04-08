import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(""); // 'sneakers' or 'apparel'
  const [airJordanOpen, setAirJordanOpen] = useState(false);
  const [dunksOpen, setDunksOpen] = useState(false);
  const [luxuryOpen, setLuxuryOpen] = useState(false);
  const [showSneakersDropdown, setShowSneakersDropdown] = useState(false);
  const [showApparelDropdown, setShowApparelDropdown] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex flex-col px-4 lg:px-[2vw] border-b border-b-gray-200">
      <div className="flex items-center justify-between py-4 lg:py-1.5 font-medium">
        {/* Menu icon for small screen sidebar */}
        <img
          onClick={() => setVisible((prev) => !prev)}
          src={assets.menu_icon}
          className="w-8 sm:w-12 cursor-pointer lg:hidden"
          alt=""
        />

        {/* Navbar left side */}
        <div>
          <NavLink to="/">
            <div className="flex items-center gap-0.5">
              <img
                src={assets.logo}
                alt=""
                className="sm:w-[38px] w-[22px] rounded"
              />
              <h1 className="sm:text-[44px] text-[24px] font-bold tracking-[-2px]">
                SNKRSET
              </h1>
            </div>
          </NavLink>
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute left-0 w-full bg-white overflow-hidden z-20 transition-all duration-500 ease-in-out ${
            visible ? "h-screen" : "h-0"
          } top-[64px] sm:top-[88px]`}
        >
          <div className="flex flex-col text-gray-700 text-[17px] font-medium px-4 pt-4">
            {/* SALE */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2"
              to="/collections"
            >
              <p>Sale</p>
            </NavLink>
            <hr className="my-2 w-[98%] mx-auto border-gray-200" />

            {/* SNEAKERS */}
            <div className="flex items-center justify-between py-2">
              <p>Sneakers</p>
              <img
                src={assets.down_arrow_icon}
                onClick={() =>
                  setOpenMenu(openMenu === "sneakers" ? "" : "sneakers")
                }
                className={`h-6 cursor-pointer transition-transform duration-300 ${
                  openMenu === "sneakers" ? "rotate-180" : ""
                }`}
                alt="Toggle"
              />
            </div>

            {openMenu === "sneakers" && (
              <div className="ml-4 flex flex-col gap-2 text-[15px] text-gray-600 transition-all duration-300">
                {/* Air Jordan */}
                <div className="flex justify-between items-center">
                  <p>Air Jordan</p>
                  <img
                    src={assets.down_arrow_icon}
                    onClick={() => setAirJordanOpen(!airJordanOpen)}
                    className={`h-6 cursor-pointer transition-transform duration-300 ${
                      airJordanOpen ? "rotate-180" : ""
                    }`}
                    alt="Toggle"
                  />
                </div>
                {airJordanOpen && (
                  <div className="ml-4 flex flex-col gap-1">
                    <p>Air Jordan 1</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Air Jordan Low</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Air Jordan High</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Air Jordan 4's</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers"
                      className="text-black font-medium"
                    >
                      All Jordans
                    </NavLink>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                  </div>
                )}

                {/* Dunks */}
                <div className="flex justify-between items-center">
                  <p>Dunks</p>
                  <img
                    src={assets.down_arrow_icon}
                    onClick={() => setDunksOpen(!dunksOpen)}
                    className={`h-6 cursor-pointer transition-transform duration-300 ${
                      dunksOpen ? "rotate-180" : ""
                    }`}
                    alt="Toggle"
                  />
                </div>
                {dunksOpen && (
                  <div className="ml-4 flex flex-col gap-1">
                    <p>Dunk Low</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>SB Dunks</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers"
                      className="text-black font-medium"
                    >
                      All Dunks
                    </NavLink>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                  </div>
                )}

                <p>Yeezy 350</p>

                {/* Luxury Sneakers */}
                <div className="flex justify-between items-center">
                  <p>Luxury</p>
                  <img
                    src={assets.down_arrow_icon}
                    onClick={() => setLuxuryOpen(!luxuryOpen)}
                    className={`h-6 cursor-pointer transition-transform duration-300 ${
                      luxuryOpen ? "rotate-180" : ""
                    }`}
                    alt="Toggle"
                  />
                </div>
                {luxuryOpen && (
                  <div className="ml-4 flex flex-col gap-1">
                    <p>Louis Vuitton</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Dior</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Gucci</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Loro Piana</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Balenciaga</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <p>Prada</p>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers"
                      className="text-black font-medium"
                    >
                      All Luxury Sneakers
                    </NavLink>
                    <hr className="my-0.5 w-[42%] border-gray-300" />
                  </div>
                )}

                <NavLink
                  onClick={() => setVisible(false)}
                  to="/sneakers"
                  className="text-black font-medium"
                >
                  All Sneakers
                </NavLink>
              </div>
            )}
            <hr className="my-2 w-[98%] mx-auto border-gray-200" />

            {/* APPARELS */}
            <div className="flex items-center justify-between py-2">
              <p>Apparels</p>
              <img
                src={assets.down_arrow_icon}
                onClick={() =>
                  setOpenMenu(openMenu === "apparel" ? "" : "apparel")
                }
                className={`h-6 cursor-pointer transition-transform duration-300 ${
                  openMenu === "apparel" ? "rotate-180" : ""
                }`}
                alt="Toggle"
              />
            </div>

            {openMenu === "apparel" && (
              <div className="ml-4 flex flex-col gap-2 text-[15px] text-gray-600 transition-all duration-300">
                <p>T-Shirts</p>
                <hr className="w-[42%] border-gray-300" />
                <p>Hoodies & Sweatshirts</p>
                <hr className="w-[42%] border-gray-300" />
                <p>Shirts</p>
                <hr className="w-[42%] border-gray-300" />
                <p>Shorts</p>
                <hr className="w-[42%] border-gray-300" />
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels"
                  className="text-black font-medium"
                >
                  All Apparels
                </NavLink>
              </div>
            )}
            <hr className="my-2 w-[98%] mx-auto border-gray-200" />

            {/* ACCESSORIES */}
            <div className="flex items-center justify-between py-2">
              <p>Accessories</p>
              <img
                src={assets.down_arrow_icon}
                onClick={() =>
                  setOpenMenu(openMenu === "accessories" ? "" : "accessories")
                }
                className={`h-6 cursor-pointer transition-transform duration-300 ${
                  openMenu === "accessories" ? "rotate-180" : ""
                }`}
                alt="Toggle"
              />
            </div>

            {openMenu === "accessories" && (
              <div className="ml-4 flex flex-col gap-2 text-[15px] text-gray-600 transition-all duration-300">
                <p>Bags</p>
                <hr className="w-[42%] border-gray-300" />
                <p>Belts</p>
                <hr className="w-[42%] border-gray-300" />
                <p>Wallets</p>
                <hr className="w-[42%] border-gray-300" />
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels"
                  className="text-black font-medium"
                >
                  All Accessories
                </NavLink>
              </div>
            )}
            <hr className="my-2 w-[98%] mx-auto border-gray-200" />
          </div>
        </div>

        {/* Navbar for large screens */}
        <div className="flex items-center font-medium">
          <ul className="hidden lg:flex gap-6 text-sm text-gray-700">
            <div
              onMouseEnter={() => setShowSneakersDropdown(true)}
              onMouseLeave={() => setShowSneakersDropdown(false)}
              className="relative"
            >
              <NavLink to="/footwear" className="flex items-center gap-1">
                <p>SNEAKERS</p>
              </NavLink>

              {/* SNEAKERS DROPDOWN */}
              {showSneakersDropdown && (
                <div className="absolute top-[100%] left-0 w-[320px] bg-white shadow-lg rounded-md p-4 text-sm z-30">
                  {/* Air Jordan */}
                  <div className="mb-3">
                    <p className="font-semibold text-black">Air Jordan</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <p>Air Jordan 1</p>
                      <p>Air Jordan Low</p>
                      <p>Air Jordan High</p>
                      <p>Air Jordan 4's</p>
                      <NavLink
                        to="/sneakers"
                        className="font-medium text-black"
                      >
                        All Jordans
                      </NavLink>
                    </div>
                  </div>

                  {/* Dunks */}
                  <div className="mb-3">
                    <p className="font-semibold text-black">Dunks</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <p>Dunk Low</p>
                      <p>SB Dunks</p>
                      <NavLink
                        to="/sneakers"
                        className="font-medium text-black"
                      >
                        All Dunks
                      </NavLink>
                    </div>
                  </div>

                  {/* Luxury */}
                  <div>
                    <p className="font-semibold text-black">Luxury</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <p>Louis Vuitton</p>
                      <p>Dior</p>
                      <p>Gucci</p>
                      <p>Loro Piana</p>
                      <p>Balenciaga</p>
                      <p>Prada</p>
                      <NavLink
                        to="/sneakers"
                        className="font-medium text-black"
                      >
                        All Luxury Sneakers
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setShowApparelDropdown(true)}
              onMouseLeave={() => setShowApparelDropdown(false)}
              className="relative"
            >
              <NavLink to="/clothing" className="flex items-center gap-1">
                <p>APPARELS</p>
              </NavLink>

              {/* APPARELS DROPDOWN */}
              {showApparelDropdown && (
                <div className="absolute top-[100%] left-0 w-[250px] bg-white shadow-lg rounded-md p-4 text-sm z-30">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <p>T-Shirts</p>
                    <p>Hoodies & Sweatshirts</p>
                    <p>Shirts</p>
                    <p>Shorts</p>
                    <NavLink to="/apparels" className="font-medium text-black">
                      All Apparels
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/accessories"
              className="flex flex-col items-center gap-1"
            >
              <p>ACCESSORIES</p>
            </NavLink>
            <NavLink
              to="/clearance-sale"
              className="flex flex-col items-center gap-1 text-red-700"
            >
              <p>SALE!</p>
            </NavLink>
            <div />
          </ul>

          <div className="flex items-center gap-1">
            <div className="hidden lg:flex ml-6">
              {/* Search bar section */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center px-2">
                  <img src={assets.search_icon} className="w-6 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full py-2 px-9 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 outline-none"
                  placeholder="Search Products..."
                />
              </div>
            </div>
            <div className="group">
              <img
                onClick={() => (token ? null : navigate("/login"))}
                src={assets.user_icon}
                alt=""
                className="w-8 cursor-pointer"
              />
              {/* Dropdown Menu */}
              {token && (
                <div className="group-hover:block hidden absolute dropdowm-menu pt-4 right-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-neutral-100 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-black">
                      My Profile
                    </p>
                    <hr className="w-2/6 border-none h-[0.5px] bg-gray-600" />
                    <p
                      onClick={() => navigate("/orders")}
                      className="cursor-pointer hover:text-black"
                    >
                      Orders
                    </p>
                    <hr className="w-2/6 border-none h-[0.5px] bg-gray-600" />
                    <p
                      onClick={logout}
                      className="cursor-pointer hover:text-black"
                    >
                      Logout
                    </p>
                    <hr className="w-2/6 border-none h-[0.5px] bg-gray-600" />
                  </div>
                </div>
              )}
            </div>

            {/* search icon for small screens */}
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-8" alt="" />
              <p className="absolute right-[-5px] top-[1px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
