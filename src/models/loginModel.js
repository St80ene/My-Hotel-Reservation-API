import mongoose from "mongoose";
const { Schema } = mongoose;

const userLogin = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userLogin);
