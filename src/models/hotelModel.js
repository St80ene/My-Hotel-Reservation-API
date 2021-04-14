import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
    rooms: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'room',
      required: true,
    },
    rating: {
      type: Number,
      enum: [2, 3, 4, 5],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
