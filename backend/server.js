import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

// middlewares
app.use(express.json()); //body parser
app.use(cors()); //cors
app.use(morgan("common"));
app.use(helmet());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // web-server
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`WebServer listening on port ${process.env.SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
