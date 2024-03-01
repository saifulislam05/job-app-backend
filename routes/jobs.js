import express from "express"
import { getJobs, createJob, updateJob, deleteJob } from "../controller/jobs.js";

const router = express.Router();

router.get("", getJobs);
router.post("", createJob);
router.patch("", updateJob);
router.delete("", deleteJob);

export default router;