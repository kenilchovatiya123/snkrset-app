import React from "react";

const CustomersCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <h3 className="text-sm text-gray-600">Customers</h3>
      <p className="text-2xl font-bold">980</p>
      <span className="text-xs text-purple-500">+3% growth</span>
    </div>
  );
};

export default CustomersCard;
