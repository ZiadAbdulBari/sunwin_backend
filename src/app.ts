import express from "express";
// import cors from "cors";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// Middlewares
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global Error Handler
app.use(errorMiddleware);

export default app;