import React from "react";

const OrderDetailsModal = ({ order, onClose }) => {
  // Guard clause: If `order` is undefined or null, render nothing.
  if (!order) return null;

  // Use optional chaining and default values to handle potential undefined fields
  const products = order.products || []; // Fallback to empty array if products is undefined

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-none backdrop-opacity-20 bg-white/70 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-2xl overflow-y-auto max-h-[90vh] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="space-y-2">
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Customer:</strong> {order.user?.name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {order.user?.email || "N/A"}
          </p>
          <p>
            <strong>Status:</strong> {order.status || "N/A"}
          </p>
          <p>
            <strong>Total Amount:</strong> ${order.amount || "N/A"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleString() || "N/A"}
          </p>

          <div className="mt-4">
            <h3 className="font-semibold">Products:</h3>
            <ul className="pl-4 list-disc">
              {products.length > 0 ? (
                products.map((item, i) => (
                  <li key={i}>
                    {item.name} – ${item.price} × {item.quantity}
                  </li>
                ))
              ) : (
                <li>No products found for this order.</li>
              )}
            </ul>
          </div>
        </div>
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

export default OrderDetailsModal;
