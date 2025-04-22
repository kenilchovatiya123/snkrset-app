import React, { useEffect, useState } from "react";
import SalesCard from "../components/DashboardWidgets/SalesCard";
import OrdersCard from "../components/DashboardWidgets/OrdersCard";
import CustomersCard from "../components/DashboardWidgets/CustomersCard";
import RevenueCard from "../components/DashboardWidgets/RevenueCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import OrderTable from "../components/Tables/OrderTable";
import axios from "axios";
import { backendUrl } from "../App";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 3500 },
  { name: "May", sales: 6000 },
];

const Dashboard = ({ token }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) return;
      try {
        const res = await axios.post(
          backendUrl + "/api/order/list",
          {},
          { headers: { token } }
        );
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="space-y-6">
      {/* Top Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SalesCard />
        <OrdersCard />
        <CustomersCard />
        <RevenueCard />
      </div>

      {/* Sales Chart */}
      <div className="bg-white shadow-sm rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Order Table */}
      <div className="bg-white shadow-sm rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
