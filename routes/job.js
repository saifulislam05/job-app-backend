import express from "express"
import { getJob,createJob } from "../controllers/job.js";
const router = express.Router();

router.post("",createJob);
router.get("", getJob);

export { router };