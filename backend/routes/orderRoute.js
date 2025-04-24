import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  getOrderCount,
  getTotalSales,
  getCustomerCount,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

// Admin Featuers
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// for order count
orderRouter.get(
  "/count",
  async (req, res) => {
    try {
      const count = await orderModel.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: "Failed to count orders" });
    }
  },
  getOrderCount
);

// for total sales
orderRouter.get(
  "/total",
  async (req, res) => {
    try {
      const orders = await orderModel.find();
      const totalSales = orders.reduce(
        (sum, order) => sum + (order.amount || 0),
        0
      );
      res.json({ totalSales });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to calculate total sales" });
    }
  },
  getTotalSales
);

// for total customer
orderRouter.get("/customers", getCustomerCount);

// Payment Featuers
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User Featuers
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
