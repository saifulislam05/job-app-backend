import jobModel from "../models/job.js";


const createJob = async (req, res) => {
    try {
         const newJob = new jobModel(req.body);
   const newAddedJob=await newJob.save();
    res.json({
        success: true,
        message:"job inserted Successfully"
    })
    } catch (error) {
        res.status(400).json({
          success: true,
          message: "something went wrong",
        });
    }
    
   
}
const getJob = async(req, res) => {
  const jobList =await jobModel.find({});
  res.json({
    success: true,
    results: jobList,
  });
};

export { createJob, getJob };