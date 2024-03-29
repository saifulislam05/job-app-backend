import jobsModel from "../model/jobs.js";

const getJobs = async (req, res) => {
    try {
        const jobs = await jobsModel.find();

        res.status(200).json({
            success: true,
            message: "Fetched all the data",
            results: jobs,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `not Found`,
        });
    }
};

const createJob = async (req, res) => {
    try {
        const newJob = new jobsModel(req.body);
        const newlyAddedJob = await newJob.save();
        res.status(201).json({
            success: true,
            message: "job inserted Successfully",
            result: newlyAddedJob,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `something went wrong ${error}`,
        });
    }
};
const updateJob = async (req, res) => {
    try {
        const jobId = req.body._id;
        const newJob = new jobsModel(req.body);
        await jobsModel.findByIdAndUpdate(jobId, newJob);

        res.status(200).json({
            success: true,
            message: "job updated Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `error : ${error.message}`,
        });
    }
};

const deleteJob = async (req, res) => {
    try {
        const jobId = req.body._id;
        await jobsModel.findByIdAndDelete(jobId);
        res.status(200).json({
            success: true,
            message: "job Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `error : ${error.message}`,
        });
    }
};

export { getJobs, createJob, updateJob, deleteJob };
