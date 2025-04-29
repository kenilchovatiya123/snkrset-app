import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import ProductDetailsModal from "../components/Modals/ProductDetailsModal";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 10;

const ProductList = ({ token }) => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/products/list?search=${searchTerm}`
      );
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/products/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, [searchTerm]);

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
    fetchList(); // Re-fetch list based on search term
  }, 500);

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 bg-gray-50">
        {/* Page Header Section */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-3">
          <h2 className="text-lg font-semibold text-gray-800">Product List</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-md text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
            {/* Just UI dropdowns, no functionality */}
            <select className="border px-2 py-1 rounded text-sm">
              <option value="">All Stock</option>
              <option value="low">Low Stock</option>
              <option value="full">Full Stock</option>
            </select>

            <select className="border px-2 py-1 rounded text-sm">
              <option value="">All Brands</option>
              <option value="air-jordan">Air Jordan's</option>
              <option value="dunks">Dunks</option>
              <option value="yeezy350">Yeezy350</option>
              <option value="louis-vuitton">Louis Vuitton</option>
              <option value="dior">Dior</option>
              <option value="gucci">Gucci</option>
              <option value="prada">Prada</option>
            </select>

            <Link to="/add">
              <button className="bg-purple-600 text-white px-4 py-1 rounded-md text-sm shadow-sm hover:bg-purple-700 transition-all duration-200">
                Add
              </button>
            </Link>
          </div>
        </div>

        {/* Table Headings */}
        <div className="grid grid-cols-7 items-center px-6 py-2 text-sm font-medium text-gray-600 border-b">
          <span>Image ▼</span>
          <span>Product Name ▼</span>
          <span>Brand ▼</span>
          <span>Price ▼</span>
          <span>Stock ▼</span>
          <span>Status ▼</span>
          <span>Action</span>
        </div>

        {/* Table Rows */}
        {list.map(({ _id, name, brand, price, stockStatus, image }, i) => (
          <div
            key={i}
            className="grid grid-cols-7 items-center px-6 py-4 text-sm bg-white border-b hover:bg-gray-50"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
              {image?.[0] && (
                <img
                  src={image[0]}
                  alt="product"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <span className="text-gray-800">{name}</span>
            <span className="text-gray-600">{brand}</span>
            <span className="text-gray-600">
              {currency}
              {price}
            </span>
            <span className="text-green-600">{stockStatus}</span>
            <span className="text-blue-500">Active</span>
            <div className="flex gap-2">
              <button
                onClick={() => removeProduct(_id)}
                className="text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit/${_id}`)}
                className="text-blue-500 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  setSelectedProduct({
                    _id,
                    name,
                    brand,
                    price,
                    stockStatus,
                    image,
                  })
                }
                className="text-green-500 hover:underline text-sm"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
