// src/component/tables/ProductTable.jsx
import React from "react";

const ProductTable = ({ products, onProductClick }) => {
  const isValidArray = Array.isArray(products);

  return (
    <div className="overflow-x-auto shadow-md">
      <table className="min-w-full bg-white text-[12px] text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
            <th className="px-4 py-3">Product ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Brand</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {isValidArray && products.length > 0 ? (
            products.map((product) => (
              <tr
                key={product._id}
                className="border-b border-b-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{product._id.slice(-6)}</td>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.brand}</td>
                <td className="px-4 py-3">₹{product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => onProductClick(product)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
