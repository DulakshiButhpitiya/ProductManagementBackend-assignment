import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());  

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "uploads" directory
app.use("/api/products/uploads", express.static(path.join(__dirname, "uploads")));

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Failed to connect to database"));
 

// Routers
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);



// Start Server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
 