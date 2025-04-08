import React from "react";
import { assets } from "../assets/assets";

const SearchBar = () => {
  return (
    <div className="w-full px-4 py-2 sm:px-6">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center px-2">
          <img
            src={assets.search_icon}
            className="w-5 text-gray-500"
            alt="search"
          />
        </div>
        <input
          type="text"
          className="block w-full py-2 pl-9 pr-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 outline-none"
          placeholder="Search Products..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
