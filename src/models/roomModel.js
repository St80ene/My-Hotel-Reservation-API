import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    type: String,
    price: Number,
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hotel'
    }
  },
  { timestamps: true }
);

export default mongoose.model("rooms", roomSchema);
