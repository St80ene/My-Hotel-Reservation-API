import express from "express";
import version1Router from "./v1";

const router = express.Router();

router.get("/", function (_req, res, _next) {
  res.status(200).json({ message: "All is well!" });
});

router.use("/v1", version1Router);

export default router;
