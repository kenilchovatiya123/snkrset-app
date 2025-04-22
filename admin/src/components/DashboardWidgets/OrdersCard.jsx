import React from "react";

const OrdersCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <h3 className="text-sm text-gray-600">Orders</h3>
      <p className="text-2xl font-bold">120</p>
      <span className="text-xs text-blue-500">+5% from last week</span>
    </div>
  );
};

export default OrdersCard;
