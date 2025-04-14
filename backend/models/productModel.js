import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sub_name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
  brand: { type: String, required: true },
  type: { type: String },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
