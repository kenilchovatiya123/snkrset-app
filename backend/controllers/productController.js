import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      sub_name,
      price,
      subCategory,
      brand,
      sizes,
      bestseller,
      description,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      sub_name,
      brand,
      price: Number(price),
      originalPrice: req.body.originalPrice, // NEW
      stockStatus: req.body.stockStatus, // NEW
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      description,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    return res.json({ success: true, message: "Product added" }); // ✅ Only one response
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message }); // ✅ Return here as well
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const query = {};

    // Search by product name (case-insensitive)
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await productModel
      .find(query)
      .skip(skip)
      .limit(parseInt(limit));

    const totalCount = await productModel.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      success: true,
      products,
      totalCount,
      totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to fetch products" });
  }
};

// function for remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for products by brand
const getProductsByBrand = async (req, res) => {
  try {
    const { brand } = req.query;

    if (!brand) {
      return res
        .status(400)
        .json({ success: false, message: "Brand is required in query" });
    }

    const products = await productModel.find({ brand });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  getProductsByBrand,
};
