import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },

  image: { type: String, required: true }
});

export const product = mongoose.model("Product", productSchema);

export default product;
 