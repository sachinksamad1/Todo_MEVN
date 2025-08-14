import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI, DB_NAME } = process.env;

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      authSource: "admin"
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
