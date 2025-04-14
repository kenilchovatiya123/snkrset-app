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
    <div className="fixed inset-0 z-50 backdrop-blur-none backdrop-opacity-20 bg-white/70 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-md p-4 flex flex-col sm:flex-row relative shadow-lg max-h-[80vh] overflow-y-auto">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          <img src={assets.close_icon} className="w-6" alt="Close" />
        </button>

        {/* Left: Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center mb-4 sm:mb-0">
          <img
            src={fullProduct.image[0]}
            alt={fullProduct.name}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full sm:w-1/2 sm:ml-6 flex flex-col justify-center">
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
                  className={`px-3 py-1 border rounded transition ${
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

          {/* Buttons Row */}
          <div className="mt-6 flex gap-4 flex-col sm:flex-row">
            <button
              className={`flex-1 px-4 py-2 rounded text-sm border ${
                selectedSize
                  ? "bg-gray-100 text-gray-700 border-gray-300"
                  : "bg-black text-white"
              }`}
              disabled={selectedSize}
            >
              SELECT SIZE
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded text-sm transition ${
                selectedSize
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => {
                if (selectedSize) {
                  addToCart(fullProduct._id, selectedSize);
                  onClose();
                }
              }}
              disabled={!selectedSize}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickviewModal;
