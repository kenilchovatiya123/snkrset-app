import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const QuickviewModal = ({ product, onClose }) => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const [fullProduct, setFullProduct] = useState(null);
  const [parsedSizes, setParsedSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const matched = products.find((p) => p._id === product._id);
    if (matched) {
      setFullProduct(matched);

      // Handle stringified sizes
      if (typeof matched.sizes === "string") {
        try {
          const parsed = JSON.parse(matched.sizes);
          setParsedSizes(parsed);
        } catch (e) {
          console.error("Error parsing sizes:", e);
          setParsedSizes([]);
        }
      } else {
        setParsedSizes(matched.sizes || []);
      }
    }
  }, [product._id, products]);

  if (!fullProduct) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-none backdrop-opacity-20 bg-white/70 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-md p-4 sm:flex relative shadow-lg">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          <img src={assets.close_icon} className="w-6" alt="Close" />
        </button>

        {/* Left: Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img
            src={fullProduct.image[0]}
            alt={fullProduct.name}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-center">
          <h2 className="text-lg font-medium uppercase">{fullProduct.name}</h2>
          <p className="text-md capitalize text-gray-600 mt-1">
            {fullProduct.sub_name}
          </p>
          <p className="text-md text-gray-800 mt-1">
            {currency}
            {fullProduct.price}
          </p>

          {/* Sizes */}
          <div className="mt-6">
            <p className="mb-2 text-sm text-gray-600">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {parsedSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
            onClick={() => {
              if (selectedSize) {
                addToCart(fullProduct._id, selectedSize);
                onClose();
              }
            }}
          >
            {selectedSize ? "ADD TO CART" : "SELECT SIZE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickviewModal;
