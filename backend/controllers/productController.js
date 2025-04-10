import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, sub_name, price, category, subCategory, sizes, bestseller } =
      req.body;

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
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
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
// const listProducts = async (req, res) => {
//   try {
//     const products = await productModel.find({});
//     res.json({ success: true, products });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };
const listProducts = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = {};

    if (type) {
      filter.type = type;
    }

    const products = await productModel.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
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

// function for products by type
const getProductsByType = async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({ message: "Missing type in query" });
    }

    const products = await productModel.find({ type });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};


export { listProducts, addProduct, removeProduct, singleProduct, getProductsByType };
