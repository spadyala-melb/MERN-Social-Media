import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import multer from "multer";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// middlewares
app.use(express.json()); //body parser
app.use(cors()); //cors
app.use(morgan("common"));
app.use(helmet());

// temporary arrangement to fix the cors
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));

// file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }

  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

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
