import express from "express";

const router = express.Router();

router.get("/", function (_req, res, _next) {
  res.status(200).json({ message: "Version 1 route up!" });
});

export default router;
