import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", routes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global Error Handler
app.use(errorMiddleware);

export default app;