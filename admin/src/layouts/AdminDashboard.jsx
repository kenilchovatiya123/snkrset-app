import React, { useEffect, useState } from "react";
import SalesCard from "../components/DashboardWidgets/SalesCard";
import OrdersCard from "../components/DashboardWidgets/OrdersCard";
import CustomersCard from "../components/DashboardWidgets/CustomersCard";
import RevenueCard from "../components/DashboardWidgets/RevenueCard";
import OrderTable from "../components/Tables/OrderTable";
import axios from "axios";
import { backendUrl } from "../App";
import SalesLineChart from "../components/DashboardGraphs/SalesLineChart";
import OrdersPieChart from "../components/DashboardGraphs/OrdersPieChart";
import MonthlyBarChart from "../components/DashboardGraphs/MonthlyBarChart";

const AdminDashboard = ({ token }) => {
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
    <div className="space-y-6 w-full max-w-full overflow-x-auto">
      {/* Top Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SalesCard />
        <OrdersCard />
        <CustomersCard />
        <RevenueCard />
      </div>

      {/* charts */}
      <MonthlyBarChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SalesLineChart />
        <OrdersPieChart />
      </div>

      {/* Order Table */}
      <div className="bg-white shadow-sm rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-4">Recent Orders</h2>
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default AdminDashboard;
