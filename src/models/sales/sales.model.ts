import mongoose, { Schema } from "mongoose";

import { ISalesModel } from "./sale.model.interface";

//Sales schema
const SalesSchema: Schema = new Schema(
  {
    prodID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crafts",
      required: true,
      unique: false,
      trim: true,
    },
    month: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    year: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
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
export default mongoose.model<ISalesModel>("Sales", SalesSchema);
