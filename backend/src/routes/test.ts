// routes/test.ts
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Test route working ✅" });
});

export default router; // ✅ make sure default export is router
