import React from "react";

const RevenueCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <h3 className="text-sm text-gray-600">Revenue</h3>
      <p className="text-2xl font-bold">₹54,000</p>
      <span className="text-xs text-emerald-500">+12% this quarter</span>
    </div>
  );
};

export default RevenueCard;
