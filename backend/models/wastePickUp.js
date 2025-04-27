import mongoose from "mongoose";

const wastePickupSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    collector: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      default: null,
    },
    wasteType: {
      type: String,
      enum: ["organic", "plastic", "metal", "glass", "electronic", "other"],
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "assigned", "collected", "completed"],
      default: "pending",
    },
    address:{
        type:String,
        default:"India, West Bengal",
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


const WastePickup = mongoose.model("WastePickup", wastePickupSchema);
export default WastePickup;
