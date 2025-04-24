import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, address, totalPrice, paymentMethod } = req.body;

    if (!userId || !items || !address || !totalPrice) {
      throw new Error("Required fields missing.");
    }

    const orderData = {
      userId,
      items,
      address,
      totalPrice,
      amount: totalPrice,
      paymentMethod,
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cardData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Placing orders using STRIPE method
const placeOrderStripe = async (req, res) => {};

// Placing orders using RAZORPAY method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// user orders data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.josn({ success: false, message: error.message });
  }
};

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.josn({ success: false, message: error.message });
  }
};

// Get total number of orders
const getOrderCount = async (req, res) => {
  try {
    const count = await orderModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get total sales amount
const getTotalSales = async (req, res) => {
  try {
    const orders = await orderModel.find();
    const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
    res.status(200).json({ totalSales });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get unique customer count
const getCustomerCount = async (req, res) => {
  try {
    const orders = await orderModel.find().select("user");
    console.log("Fetched orders:", orders);

    const customerIds = orders
      .filter((order) => order.user) // only those with a user
      .map((order) => order.user.toString());

    console.log("Customer IDs:", customerIds);

    const uniqueCustomerCount = new Set(customerIds).size;

    res.status(200).json({ customerCount: uniqueCustomerCount });
  } catch (error) {
    console.error("Customer count error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  getOrderCount,
  getTotalSales,
  getCustomerCount,
};
