import { config } from "./config";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(`${config.mongo.url}`, {
      retryWrites: true,
    });
    console.log(`MongoDb connected successfully`);
  } catch (error) {
    console.log(error);
  }
};
