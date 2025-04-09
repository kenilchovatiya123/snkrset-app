import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sub_name: { type: String, required: true },
  //   description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
  // ✅ New field for filtering by type (e.g., Air Jordan 1, Dunk Low)
  type: { type: String },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
