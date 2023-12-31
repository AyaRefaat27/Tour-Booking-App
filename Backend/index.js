import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

import tourRoute from "./Routers/tours.js";
import userRoute from "./Routers/users.js";
import authRoute from "./Routers/auth.js";
import reviewRoute from "./Routers/reviews.js";
import bookingRoute from "./Routers/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// // Testing
// app.get("/", (req, res) => {
//   res.send("API is working!");
// });

// Database Connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Database Connected");
  } catch (error) {
    console.log("MongoDB Database Connection Failed");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/tours", tourRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
