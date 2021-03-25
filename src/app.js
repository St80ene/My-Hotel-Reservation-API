// external modules
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import config from "./config";
// app modules
import indexRouter from "./routes/index";

const app = express();
const { logFormat } = config;

app.use(logger(logFormat));
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// mount routers
app.use("/", indexRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: res.locals.message });
});

export default app;
