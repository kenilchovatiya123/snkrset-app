import express from "express";
import {
  addProduct,
  removeProduct,
  listProducts,
  singleProduct,
  getProductsByBrand,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import productModel from "../models/productModel.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", async (req, res) => {
  try {
    const { search = "", category = "", brand = "" } = req.query;

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (category) {
      query.category = category;
    }
    if (brand) {
      query.brand = brand;
    }

    // Fetch all products without pagination
    const products = await productModel.find(query);

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

productRouter.put("/products/:id", updateProduct);

productRouter.get("/filter-by-brand", getProductsByBrand);

export default productRouter;
