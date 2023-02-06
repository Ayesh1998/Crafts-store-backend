import mongoose from "mongoose";

export interface ISalesModel extends Document {
    prodID: mongoose.Schema.Types.ObjectId;
    month: string;
    year: string;
    date: string;
    userId: mongoose.Schema.Types.ObjectId;
  }
  