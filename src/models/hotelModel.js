import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  address: {
    type: String,
    minLength: 3,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
    // enum:
  },
});

export default mongoose.model("Hotel", hotelSchema);
