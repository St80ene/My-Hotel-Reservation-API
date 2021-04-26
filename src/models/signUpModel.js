import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSignUp = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('user', userSignUp);