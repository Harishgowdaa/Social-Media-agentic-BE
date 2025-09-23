import mongoose from "mongoose";
import config from "config"
import logger from "./logger.js";

const MONGODB_URI = config.get("mongodb_uri")

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};
