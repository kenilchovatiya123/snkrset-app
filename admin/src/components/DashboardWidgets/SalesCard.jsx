import React from "react";

const SalesCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <h3 className="text-sm text-gray-600">Total Sales</h3>
      <p className="text-2xl font-bold">₹12,345</p>
      <span className="text-xs text-green-500">+10% from last month</span>
    </div>
  );
};

export default SalesCard;
