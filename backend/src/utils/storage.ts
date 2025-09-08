import fs from "fs";
import path from "path";
import { User } from "../types/user.js";

interface Data {
  users: User[];
  otps: Record<string, { otp: string; expiresAt: number }>;
}

const DATA_FILE = path.join(process.cwd(), "src", "data", "users.json");

function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    const init: Data = { users: [], otps: {} };
    fs.writeFileSync(DATA_FILE, JSON.stringify(init, null, 2));
  }
}

export function readData(): Data {
  ensureFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Data;
}

export function writeData(data: Data): void {
  ensureFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
