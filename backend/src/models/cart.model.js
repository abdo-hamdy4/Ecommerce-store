import mongoose from "mongoose";
const { Schema } = mongoose;

const CartStatusEnum = ["active", "completed"];

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, default: 1 },
      unitPrice: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: CartStatusEnum, default: "active" },
});

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
