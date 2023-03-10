import mongoose, { Schema } from "mongoose";

import { ICraftModel } from "./craft.model.interfaces";

//Craft schema
const CraftSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    material: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    photo: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: false,
  }
);

//exporting Craft model
export default mongoose.model<ICraftModel>("Crafts", CraftSchema);
