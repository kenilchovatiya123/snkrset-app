import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../App";

const CustomersCard = () => {
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/order/customers`);
        console.log("Total orders response:", res.data);
        setCustomerCount(res.data.customerCount);
      } catch (err) {
        console.error("Failed to fetch customer count:", err);
      }
    };

    fetchCustomerCount();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2 w-full">
      <h3 className="text-sm text-gray-600">Customers</h3>
      <p className="text-2xl font-bold">{customerCount}</p>
      <span className="text-xs text-purple-500">+3% growth</span>
    </div>
  );
};

export default CustomersCard;
