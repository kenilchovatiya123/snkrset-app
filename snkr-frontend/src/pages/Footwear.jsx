import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/shared/Title";
import ProductItem from "../components/product/ProductItem";

const Footwear = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-8 border-t border-t-gray-200">
      {/* Filter Button for Small Screens */}
      <button
        className="sm:hidden flex items-center gap-2 text-lg font-medium px-4 py-2 border border-gray-400 rounded-md"
        onClick={() => setShowFilter(true)}
      >
        <img className="h-5" src={assets.filter_icon} alt="Filter Icon" />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-50 sm:static sm:bg-transparent sm:z-auto transition-transform transform ${
          showFilter ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="w-64 h-full bg-white shadow-lg px-5 py-4 sm:min-w-60">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              className="sm:hidden text-gray-500"
              onClick={() => setShowFilter(false)}
            >
              ✖
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input type="checkbox" value="Mens" onChange={toggleCategory} />
                Men's
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Womens"
                  onChange={toggleCategory}
                />
                Women's
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Unisex"
                  onChange={toggleCategory}
                />
                Unisex
              </label>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Topwear"
                  onChange={toggleSubCategory}
                />
                Topwear
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Bottomwear"
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Footwear"
                  onChange={toggleSubCategory}
                />
                Footwear
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="text-sm px-4 py-2 border border-gray-400 rounded-md"
              onClick={() => {
                setCategory([]);
                setSubCategory([]);
                applyFilter();
              }}
            >
              Clear All
            </button>
            <button
              className="text-sm px-4 py-2 bg-black text-white rounded-md"
              onClick={() => setShowFilter(false)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          {/* Filter Icon for Small Screens */}
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relavent">Relevant</option>
            <option value="low-high">Low-High</option>
            <option value="high-low">High-Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              sub_name={item.sub_name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footwear;
