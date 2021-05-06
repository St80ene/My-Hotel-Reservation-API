import express from "express";
import version1Router from "./v1";
import hotelModel from "./v1/hotelRoute";
import loginRoute from "./v1/loginRoute";
import signUpRoute from "./v1/signUpRoute";
import userRoute from "./v1/userRoute";

const router = express.Router();

router.get("/", function (_req, res, _next) {
  res.status(200).json({ message: "All is well!" });
});

router.use("/v1", version1Router);
router.use("/api/v1/hotels/", hotelModel);
router.use("/api/v1/login/", loginRoute);
router.use("/api/v1/signup/", signUpRoute);
router.use("/api/v1/user/", userRoute);

export default router;
