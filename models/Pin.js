import mongoose from "mongoose";

const pinSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Pin = mongoose.model("Pin", pinSchema);

export default Pin;
