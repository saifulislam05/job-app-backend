import express from "express"
import { getJobs, createJob, updateJob } from "../controller/jobs.js";

const router = express.Router();

router.get("", getJobs);
router.post("", createJob);
router.patch("", updateJob);

export default router;