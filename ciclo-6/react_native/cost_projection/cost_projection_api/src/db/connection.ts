import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "ERRO FATAL: A variável MONGODB_URI não está definida no .env"
    );
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("=> Database connected successfully");
  } catch (error) {
    console.error("=> Error connecting to database:", error);
    process.exit(1);
  }
};
