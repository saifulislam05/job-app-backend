import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/job.js";

mongoose.connect("mongodb://localhost:27017/jobapp")
    .then(() => {
    console.log("Databse connected successfully");
    })
    .catch((err) => {
    console.log("Database connection failed",err);
})

const app = express();
app.use("/api/v1/job/", router);

app.listen(5000,()=>console.log("server is running on port 5000"))
