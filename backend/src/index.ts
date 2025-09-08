import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import { sendEmail } from "./utils/mailer"; 
import { connectDB, User } from "./db"; 
import testRouter from "./routes/test"; 

dotenv.config();

const app = express();

// ------------------ Middlewares ------------------
app.use(express.json());

const allowedOrigins = ["http://localhost:8080", "http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ------------------ Connect Database ------------------
connectDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ------------------ Routes ------------------
app.use("/api/test", testRouter);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.send("Backend is working ✅");
});

// ------------------ REGISTER ------------------
app.post("/api/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ /api/register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------ LOGIN ------------------
app.post("/api/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("❌ /api/login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------ FORGOT PASSWORD (OTP Flow) ------------------

// 1. Request OTP
app.post("/api/request-password-reset", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetToken = otp;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Send OTP via email
    await sendEmail(email, "Password Reset OTP", `Your OTP is: ${otp}`);

    res.json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("❌ /api/request-password-reset error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 2. Verify OTP (no regeneration, just check)
app.post("/api/verify-otp", async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({
      email,
      resetToken: otp,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired OTP" });

    res.json({ message: "OTP verified ✅" });
  } catch (err) {
    console.error("❌ /api/verify-otp error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 3. Reset Password (clear OTP here)
app.post("/api/reset-password", async (req: Request, res: Response) => {
  const { email, password, otp } = req.body;

  try {
    const user = await User.findOne({
      email,
      resetToken: otp,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    // Clear OTP after reset
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("❌ /api/reset-password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------ Start Server ------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
