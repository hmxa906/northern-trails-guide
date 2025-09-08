import { Router } from "express";
import { readData, writeData } from "../utils/storage.js";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { sendEmail } from "../utils/mailer.js";
import { v4 as uuidv4 } from "uuid";
import { requireAuth, AuthRequest } from "../middleware/auth.js";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

// 👇 safer types
type AppJwtPayload = { id: string; email: string };

const JWT_SECRET: Secret = process.env.JWT_SECRET || "supersecret";
const JWT_EXPIRES_IN: string | number = process.env.JWT_EXPIRES_IN || "7d";

// ---------------------- REGISTER ----------------------
router.post("/register", async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const data = readData();
  const exists = data.users.find((u) => u.email === email.toLowerCase());
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = {
    id: uuidv4(),
    email: email.toLowerCase(),
    passwordHash: hash,
    createdAt: new Date().toISOString(),
  };

  data.users.push(user);
  writeData(data);

  try {
    await sendEmail({
      to: email,
      subject: "Welcome 🎉",
      text: "Your account has been created.",
      html: "<h3>Welcome!</h3><p>Your account is ready.</p>",
    });
  } catch (err) {
    console.error("Email send error:", err);
  }

  res.json({ message: "Registered successfully" });
});

// ---------------------- LOGIN ----------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  const data = readData();

  const user = data.users.find((u) => u.email === email.toLowerCase());
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const payload: AppJwtPayload = { id: user.id, email: user.email };

  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN as SignOptions["expiresIn"], // ✅ FIXED
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  res.json({ message: "Login successful", token });
});


// ---------------------- REQUEST PASSWORD RESET (OTP) ----------------------
router.post("/request-password-reset", async (req, res) => {
  const { email } = req.body as { email: string };
  const data = readData();
  const user = data.users.find((u) => u.email === email.toLowerCase());
  if (!user) return res.status(400).json({ message: "No account found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  data.otps[email.toLowerCase()] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };
  writeData(data);

  try {
    await sendEmail({
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP: ${otp}`,
      html: `<p>Your OTP is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });
  } catch (err) {
    console.error("OTP email error:", err);
  }

  res.json({ message: "OTP sent to your email" });
});

// ---------------------- VERIFY OTP ----------------------
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body as { email: string; otp: string };
  const data = readData();
  const record = data.otps[email.toLowerCase()];

  if (!record) return res.status(400).json({ message: "No OTP requested" });
  if (Date.now() > record.expiresAt) return res.status(400).json({ message: "OTP expired" });
  if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  const resetToken = jwt.sign({ email: email.toLowerCase() }, JWT_SECRET, {
    expiresIn: "10m",
  });

  delete data.otps[email.toLowerCase()];
  writeData(data);

  res.json({ message: "OTP verified", resetToken });
});

// ---------------------- RESET PASSWORD ----------------------
router.post("/reset-password", async (req, res) => {
  const { token, password } = req.body as { token: string; password: string };
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { email: string };
    const data = readData();
    const user = data.users.find((u) => u.email === payload.email);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.passwordHash = await bcrypt.hash(password, 10);
    writeData(data);

    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

// ---------------------- PROTECTED ROUTE ----------------------
router.get("/profile", requireAuth, (req: AuthRequest, res) => {
  const data = readData();
  const user = data.users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ id: user.id, email: user.email, createdAt: user.createdAt });
});

export default router;
