import app from "./app";
import { prisma } from "./config/db";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect DB
    await prisma.$connect();
    console.log("Database connected");

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

startServer();