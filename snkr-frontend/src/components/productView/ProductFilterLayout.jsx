import React, { useState } from "react";
import ProductGrid from "../../components/productView/ProductGrid";
import { assets } from "../../assets/assets";
import Title from "../layout/Title";

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

      {/* Sort + Filter */}
      <div className="flex items-center flex-row justify-between w-full px-4 text-sm text-gray-800 relative sm:gap-8 mt-4">
        {/* Breadcrumbs */}
        <Title text1="Sneakers" text2={title} />
        {/* Small Screen: Latest Left + Filter Right */}
        <div className="flex w-full justify-between items-center sm:hidden">
          {/* Latest Sort Button - Left */}
          <button onClick={toggleSortMenu} className="flex items-center gap-1">
            <span>Latest</span>
            <img src={assets.downArrow} className="w-5 h-5" alt="sort" />
          </button>

          {/* Filter Button - Right */}
          <button
            onClick={toggleFilter}
            className="flex items-center gap-1"
            title="Filters"
          >
            <img src={assets.filterIcon} alt="Filter" className="w-6 h-6" />
          </button>
        </div>

        {/* Large Screen: Original Layout */}
        <div className="hidden sm:flex items-center gap-8">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSortMenu}
              className="flex items-center gap-2"
            >
              Latest
              <img src={assets.downArrow} className="w-4 h-4" alt="sort" />
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
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2"
            title="Filters"
          >
            <img src={assets.filterIcon} alt="Filter" className="w-5 h-5" />
            <span>View Filters</span>
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
