import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../App";

const SalesCard = () => {
  const [salesTotal, setSalesTotal] = useState(0);

  useEffect(() => {
    const fetchSalesTotal = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/order/total`);
        console.log("Total sales response:", res.data);
        setSalesTotal(res.data.totalSales);
      } catch (err) {
        console.error("Failed to fetch total sales:", err);
      }
    };

    fetchSalesTotal();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2 w-full">
      <h3 className="text-sm text-gray-600">Total Sales</h3>
      <p className="text-2xl font-bold">₹{salesTotal}</p>
      <span className="text-xs text-green-500">+10% from last month</span>
    </div>
  );
};

export default SalesCard;
