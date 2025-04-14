import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/ShopContext"; // Adjust the path if necessary
import ProductGrid from "../productView/ProductGrid";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const ProductFilterLayout = ({ title, products }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);


  const toggleFilter = () => setShowFilter(!showFilter);
  const toggleSortMenu = () => setShowSortMenu(!showSortMenu);

  // Example filter function (you can expand based on your filtering needs)
  const applyFilters = (gender, size) => {
    let filtered = products;

    if (gender) {
      filtered = filtered.filter((product) => product.gender === gender);
    }

    if (size) {
      filtered = filtered.filter((product) => product.sizes.includes(size));
    }

    setFilteredProducts(filtered); // Update the filtered products
  };

  return (
    <div className="relative">
      {/* Top Filter Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 space-x-2">
          <Link to="/" className="hover:underline text-black">
            Home
          </Link>
          <span>{">"}</span>
          <span>Sneakers</span>
          <span>{">"}</span>
          <span className="font-medium text-black">Air Jordan</span>
        </div>

        {/* Sort + Filter */}
        <div className="flex items-center gap-6 text-sm text-gray-800 relative">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSortMenu}
              className="flex items-center gap-1"
            >
              Latest
              <img src={assets.down_arrow_icon} className="w-6" alt="" />
            </button>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 bg-white shadow-md border rounded-md w-48 z-10">
                <ul className="text-left text-gray-700 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Price, low to high
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Price, high to low
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Best selling
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Latest
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* View Filters */}
          <button onClick={toggleFilter} className="flex items-center gap-1">
            <span className="material-icons text-base">View Filters</span>
          </button>
        </div>
      </div>

      {/* Sidebar Filter */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-20 transform transition-transform duration-300 ${
          showFilter ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <button onClick={toggleFilter} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-4 space-y-6 overflow-y-auto h-[calc(100%-120px)]">
          {/* Gender Filter */}
          <div>
            <h3 className="font-medium mb-2">Gender</h3>
            <div className="space-y-1">
              {["Men", "Women", "Kids"].map((gender) => (
                <label key={gender} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => applyFilters(gender, null)}
                  />
                  <span>{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "28", "30", "32", "UK8", "UK9", "UK10"].map(
                (size) => (
                  <label key={size} className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      onChange={() => applyFilters(null, size)}
                    />
                    {size}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="absolute bottom-0 w-full px-4 py-4 border-t bg-white flex justify-between gap-4">
          <button className="w-1/2 border border-gray-300 rounded py-2 text-sm">
            Remove All
          </button>
          <button
            className="w-1/2 bg-black text-white rounded py-2 text-sm"
            onClick={() => applyFilters(null, null)} // Apply filters when needed
          >
            Apply
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductFilterLayout;
