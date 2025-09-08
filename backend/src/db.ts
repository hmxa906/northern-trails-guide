import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

// ------------------ User Schema ------------------
import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  resetToken?: string;        // OTP / token
  resetTokenExpiry?: number;  // OTP expiry timestamp
}

const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String },        // optional
  resetTokenExpiry: { type: Number },  // optional
});

export const User = model<IUser>("User", userSchema);
