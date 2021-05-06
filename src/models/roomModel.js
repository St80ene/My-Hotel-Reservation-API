import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    room_name: {
      type: String,
      required: true,
    },
    total_occupants: {
      type: Number,
      required: true,
    },
    hotel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
      required: true,
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "reserved", "occupied"],
      default: "available",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("rooms", roomSchema);
