// src/component/modals/ProductDetailsModal.jsx
import React from "react";

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-none backdrop-opacity-20 bg-white/70 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-2xl overflow-y-auto max-h-[90vh] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl mb-4"
        />

        <p>
          <strong>Name:</strong> {product.name || "N/A"}
        </p>
        <p>
          <strong>Sub Name:</strong> {product.sub_name || "N/A"}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand || "N/A"}
        </p>
        <p>
          <strong>Price:</strong> ${product.price || "0.00"}
        </p>
        <p>
          <strong>Sizes:</strong>{" "}
          {product.sizes?.join(", ") || "No sizes available"}
        </p>
        <p className="mt-4">
          <strong>Description:</strong>{" "}
          {product.description || "No description available"}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
