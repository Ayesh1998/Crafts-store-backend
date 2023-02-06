import mongoose, { Schema } from "mongoose";

import { IUserModel } from "./user.model.interfaces";

//User schema
const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    last_name: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);

//exporting Craft model
module.exports = mongoose.model<IUserModel>("Users", UserSchema);
