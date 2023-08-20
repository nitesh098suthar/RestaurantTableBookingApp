import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/connectDB.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({ path: "./config/.env" });

const app = express();
//cors options for cookies sending and recieving
const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URI,
  methods: "GET,PUT,POST,DELETE",
};

app.use(cors(corsOptions));
// to access req.cookie 
app.use(cookieParser());
// to parse body or use res.json({})
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// connectio to db
connectDB();

// importing routes
import reservationRoute from "./routes/reservationRoute.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";

//routes
app.use("/api/v1", reservationRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1/admin", adminRoute);

// error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("server is up on PORT: " + process.env.PORT);
});
