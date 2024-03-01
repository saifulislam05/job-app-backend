import express from "express";
import router from "./routes/jobs.js";
import mongoose from "mongoose";
// creating server
const app = express();
// body perser Middleware
app.use(express.json());

// connection with Mongo Database
mongoose
  .connect(`mongodb://localhost:27017/jobs`)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("Database connection Failed", err));

// Jobs Endpoint
app.use("/jobs", router)

// listen on port
app.listen("10000", () => console.log("App is running on port 10000"));