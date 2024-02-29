import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/job.js";

const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://saifulbijulia735:9FHyuiwPW98diANB@cluster0.xo4ltbz.mongodb.net/"
  )
  .then(() => {
    console.log("Databse connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use("/api/v1/job/", router);

app.listen(5000,()=>console.log("server is running on port 5000"))
