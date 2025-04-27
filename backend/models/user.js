import { name } from "ejs";
import mongoose from "mongoose";

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 10,
    },
    role: {
      type: String,
      enum: ["user", "admin","collector"],
      default: "user",
    },
    points: {
      type: Number,
      default: 0, 
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
        default: [0, 0],
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.index({ location: '2dsphere' }); 

const User = mongoose.model("User", userSchema);

export default User;
