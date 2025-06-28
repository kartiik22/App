require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend requests

connectDB(); // Connect to MongoDB

app.use("/api/auth", require("./routes/authRoutes")); // Use authentication routes

app.listen(4000, () => console.log("Server running on port 4000"));
