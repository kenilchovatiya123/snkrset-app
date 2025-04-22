import React from "react";

const OrderTable = ({ orders }) => {
  const isValidArray = Array.isArray(orders);

  return (
    <div className="overflow-x-auto shadow-md">
      <table className="min-w-full bg-white text-sm text-left">
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
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{order._id.slice(-6)}</td>
                  <td className="px-4 py-3">{customerName}</td>
                  <td className="px-4 py-3">{productList}</td>
                  <td className="px-4 py-3">{totalQty}</td>
                  <td className="px-4 py-3">₹{order.amount.toFixed(2)}</td>
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
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-6 text-gray-500">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
