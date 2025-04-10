import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [airJordanOpen, setAirJordanOpen] = useState(false);
  const [dunksOpen, setDunksOpen] = useState(false);
  const [luxuryOpen, setLuxuryOpen] = useState(false);
  const [showSneakersDropdown, setShowSneakersDropdown] = useState(false);
  const [showApparelDropdown, setShowApparelDropdown] = useState(false);
  const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

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

  // const handleSearch = (e) => {
  //   if (e.key === "Enter" && searchTerm.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  //   }
  // };

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
              to="/clearance-sale"
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
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/air-jordan-1"
                    >
                      Air Jordan 1
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/air-jordan-low"
                    >
                      Air Jordan Low
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/air-jordan-high"
                    >
                      Air Jordan High
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/air-jordan-4"
                    >
                      Air Jordan 4's
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/air-jordan"
                    >
                      All Jordans
                    </NavLink>
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
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/dunk-low"
                    >
                      Dunk Low
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/sb-dunk"
                    >
                      SB Dunks
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/dunk"
                    >
                      All Dunks
                    </NavLink>
                  </div>
                )}

                {/* Luxury */}
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
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/louis-vuitton"
                    >
                      Louis Vuitton
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/dior"
                    >
                      Dior
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/gucci"
                    >
                      Gucci
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/loro-piana"
                    >
                      Loro Piana
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/balenciaga"
                    >
                      Balenciaga
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/prada"
                    >
                      Prada
                    </NavLink>
                    <NavLink
                      onClick={() => setVisible(false)}
                      to="/sneakers/luxury"
                    >
                      All Luxury Sneakers
                    </NavLink>
                  </div>
                )}
                <NavLink onClick={() => setVisible(false)} to="/sneakers">
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
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels/t-shirts"
                >
                  T-Shirts
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels/hoodies"
                >
                  Hoodies & Sweatshirts
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels/shirts"
                >
                  Shirts
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/apparels/shorts"
                >
                  Shorts
                </NavLink>
                <NavLink onClick={() => setVisible(false)} to="/apparels">
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
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/accessories/bags"
                >
                  Bags
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/accessories/belts"
                >
                  Belts
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/accessories/wallets"
                >
                  Wallets
                </NavLink>
                <NavLink onClick={() => setVisible(false)} to="/accessories">
                  All Accessories
                </NavLink>
              </div>
            )}

            <hr className="my-2 w-[98%] mx-auto border-gray-200" />
          </div>
        </div>

        {/* Continue with rest of Navbar... */}
        <div className="flex items-center font-medium">
          <ul className="hidden lg:flex gap-6 text-sm text-gray-700">
            <NavLink
              to="/sale"
              className="flex items-center gap-1 text-red-600"
            >
              <p>SALE!</p>
            </NavLink>
            <div
              onMouseEnter={() => setShowSneakersDropdown(true)}
              onMouseLeave={() => setShowSneakersDropdown(false)}
              className="relative"
            >
              <NavLink to="/sneakers" className="flex items-center gap-1">
                <p>SNEAKERS</p>
              </NavLink>

              {/* SNEAKERS DROPDOWN */}
              {showSneakersDropdown && (
                <div className="absolute top-[100%] left-0 w-[320px] bg-white shadow-lg rounded-md p-4 text-sm z-30">
                  {/* Air Jordan */}
                  <div className="mb-3">
                    <p className="font-semibold text-black">Air Jordan</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <NavLink to="/collections/airjordan1">Air Jordan 1</NavLink>
                      <NavLink to="/sneakers/air-jordan-low">
                        Air Jordan Low
                      </NavLink>
                      <NavLink to="/sneakers/air-jordan-high">
                        Air Jordan High
                      </NavLink>
                      <NavLink to="/sneakers/air-jordan-4">
                        Air Jordan 4's
                      </NavLink>
                      <NavLink to="/sneakers">All Jordans</NavLink>
                    </div>
                  </div>
                  {/* Dunks */}
                  <div className="mb-3">
                    <p className="font-semibold text-black">Dunks</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <NavLink to="/sneakers/dunk-low">Dunk Low</NavLink>
                      <NavLink to="/sneakers/sb-dunks">SB Dunks</NavLink>
                      <NavLink to="/sneakers">All Dunks</NavLink>
                    </div>
                  </div>
                  {/* Luxury */}
                  <div>
                    <p className="font-semibold text-black">Luxury</p>
                    <div className="ml-3 mt-1 text-gray-700 flex flex-col gap-1">
                      <NavLink to="/sneakers/louis-vuitton">
                        Louis Vuitton
                      </NavLink>
                      <NavLink to="/sneakers/dior">Dior</NavLink>
                      <NavLink to="/sneakers/gucci">Gucci</NavLink>
                      <NavLink to="/sneakers/loro-piana">Loro Piana</NavLink>
                      <NavLink to="/sneakers/balenciaga">Balenciaga</NavLink>
                      <NavLink to="/sneakers/prada">Prada</NavLink>
                      <NavLink to="/sneakers">All Luxury Sneakers</NavLink>
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
              <NavLink to="/apparels" className="flex items-center gap-1">
                <p>APPARELS</p>
              </NavLink>
              {showApparelDropdown && (
                <div className="absolute top-[100%] left-0 w-[250px] bg-white shadow-lg rounded-md p-4 text-sm z-30">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <NavLink to="/apparels/tshirts">T-Shirts</NavLink>
                    <NavLink to="/apparels/hoodies">
                      Hoodies & Sweatshirts
                    </NavLink>
                    <NavLink to="/apparels/shirts">Shirts</NavLink>
                    <NavLink to="/apparels/shorts">Shorts</NavLink>
                    <NavLink to="/apparels">All Apparels</NavLink>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setShowAccessoriesDropdown(true)}
              onMouseLeave={() => setShowAccessoriesDropdown(false)}
              className="relative"
            >
              <NavLink to="/accessories" className="flex items-center gap-1">
                <p>ACCESSORIES</p>
              </NavLink>
              {showAccessoriesDropdown && (
                <div className="absolute top-[100%] left-0 w-[250px] bg-white shadow-lg rounded-md p-4 text-sm z-30">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <NavLink to="/accessories/bags">Bags</NavLink>
                    <NavLink to="/accessories/belts">Belts</NavLink>
                    <NavLink to="/accessories/wallets">Wallets</NavLink>
                    <NavLink to="/accessories">All Accessories</NavLink>
                  </div>
                </div>
              )}
            </div>
          </ul>

          {/* Search, User, Cart */}
          <div className="flex items-center gap-3 ml-6">
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 start-0 flex items-center px-2">
                <img
                  src={assets.search_icon}
                  className="w-6 text-gray-500"
                  alt="search"
                />
              </div>
              <input
                type="text"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                // onKeyDown={handleSearch}
                className="block w-full py-2 px-9 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 outline-none"
                placeholder="Search Products..."
              />
            </div>

            <div className="group">
              <img
                onClick={() => (token ? null : navigate("/login"))}
                src={assets.user_icon}
                alt="user"
                className="w-8 cursor-pointer"
              />
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

            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-8" alt="cart" />
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
