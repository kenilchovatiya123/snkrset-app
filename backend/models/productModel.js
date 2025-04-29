import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sub_name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: false },
  image: { type: Array, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  stockStatus: {
    type: String,
    enum: ["low stock", "full stock"],
    default: "full stock",
  }, // New field
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  type: { type: String },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
