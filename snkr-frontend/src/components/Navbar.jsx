import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

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
    <div className="flex flex-col px-2 lg:px-[2vw] border-b border-b-gray-200 pb-4">
      <div className="flex items-center justify-between py-3 font-medium">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />

        <div className="items-center hidden sm:block">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
        </div>

        <div className="flex items-center sm:gap-2 gap-0.5">
          <img
            src={assets.logo}
            alt=""
            className="sm:w-[38px] w-[18px] rounded"
          />
          <h1 className="sm:text-[44px] text-[20px] font-bold tracking-[-2px]">
            SNKRSET
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="group hidden sm:block">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt=""
              className="w-8 cursor-pointer"
            />
            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdowm-menu pt-4 right-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-neutral-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <hr className="w-2/6 border-none h-[0.5px] bg-gray-600" />
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
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
          <div className="items-center sm:hidden">
            <img
              src={assets.search_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-8" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 ">
            <div
              onClick={() => setVisible(false)}
              className="p-3 cursor-pointer"
            >
              <img src={assets.cross_icon} className="h-6" alt="" />
              {/* <p>Back</p> */}
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to="/collections"
            >
              NEW ARRIVALS
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to="/clothing"
            >
              CLOTHING
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to="/collections/footwear"
            >
              FOOTWEAR
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to="/accessories"
            >
              ACCESSORIES
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 text-red-700"
              to="/clearance-sale"
            >
              CLEARANCE SALE UPTO 75% OFF
            </NavLink>
            <hr />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-1 font-medium">
        <ul className="hidden sm:flex gap-12 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTIONS</p>
          </NavLink>
          <NavLink to="/clothing" className="flex flex-col items-center gap-1">
            <p>CLOTHING</p>
          </NavLink>
          <NavLink
            to="/collections/footwear"
            className="flex flex-col items-center gap-1"
          >
            <p>FOOTWEAR</p>
          </NavLink>
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
            <p>CLEARANCE SALE UPTO 75% OFF</p>
          </NavLink>
          {/* <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                        <p>COLLECTION</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink> */}
          {/* <NavLink to='/about' className='flex flex-col items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink> */}
          {/* <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink> */}
        </ul>
      </div>
      {/* <hr className='mt-2 w-full' /> */}
    </div>
  );
};

export default Navbar;
