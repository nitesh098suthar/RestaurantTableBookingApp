import ErrorHandler from "../utils/ErrorHandler.js";
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(Number(err.statusCode)).json({
    success: false,
    msg: err.message,
  });
};
