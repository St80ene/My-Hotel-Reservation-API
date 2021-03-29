import express from "express";
import version1Router from "./v1";
import hotelModel from "./v1/hotelRoute";

const router = express.Router();

router.get("/", function (_req, res, _next) {
  res.status(200).json({ message: "All is well!" });
});

router.use("/v1", version1Router);
router.use("/api/v1/hotels/", hotelModel);

export default router;
