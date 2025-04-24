import React, { useState } from "react";
import OrderDetailsModal from "../Modals/OrderDetailsModal";

const OrderTable = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const isValidArray = Array.isArray(orders);

  const openModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full bg-white text-[12px] text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Products</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Payment</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Address</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {isValidArray && orders.length > 0 ? (
            orders.map((order) => {
              const fullAddress = `${order.address.street}, ${order.address.city}, ${order.address.state}, ${order.address.zipcode}, ${order.address.country}`;
              const customerName = `${order.address.firstName} ${order.address.lastName}`;
              const productList = order.items
                .map((item) => `${item.name} (${item.size})`)
                .join(", ");
              const totalQty = order.items.reduce(
                (sum, item) => sum + item.quantity,
                0
              );

              return (
                <tr
                  key={order._id}
                  className="border-b border-b-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{order._id.slice(-6)}</td>
                  <td className="px-4 py-3">{customerName}</td>
                  <td className="px-4 py-3">{productList}</td>
                  <td className="px-4 py-3">{totalQty}</td>
                  <td className="px-4 py-3">₹{order.amount}</td>
                  <td className="px-4 py-3">{order.paymentMethod}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-500"
                          : order.status === "Shipped"
                          ? "bg-blue-500"
                          : order.status === "Packing"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{fullAddress}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openModal(order)}
                      className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="10" className="text-center py-6 text-gray-500">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <OrderDetailsModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
};

export default OrderTable;
