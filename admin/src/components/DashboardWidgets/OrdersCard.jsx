import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../App";

const OrdersCard = () => {
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/order/count`);
        console.log("Total orders response:", res.data);
        setOrderCount(res.data.count);
      } catch (err) {
        console.error("Failed to fetch order count:", err);
      }
    };

    fetchOrderCount();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2 w-full">
      <h3 className="text-sm text-gray-600">Orders</h3>
      <p className="text-2xl font-bold">{orderCount}</p>
      <span className="text-xs text-blue-500">+5% from last week</span>
    </div>
  );
};

export default OrdersCard;
