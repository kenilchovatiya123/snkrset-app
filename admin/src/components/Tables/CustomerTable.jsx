import React from "react";

const CustomerTable = ({ customers }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Customer ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Registered On</th>
            <th className="px-4 py-2">Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id} className="border-b">
              <td className="px-4 py-2">{customer._id}</td>
              <td className="px-4 py-2">{customer.name}</td>
              <td className="px-4 py-2">{customer.email}</td>
              <td className="px-4 py-2">{customer.phone}</td>
              <td className="px-4 py-2">{customer.createdAt}</td>
              <td className="px-4 py-2">{customer.totalOrders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
