import mongoose, { Schema } from "mongoose";

const registerEmailSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const registerEmail =
  mongoose.models.registerEmailSchema ||
  mongoose.model("registerEmail", registerEmailSchema);

export default registerEmail;
