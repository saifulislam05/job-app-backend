const createJob = (req,res) => {
    res.json({
        success: true,
        message:"dummy job create API"
    })
}
const getJob = (req, res) => {
  res.json({
    success: true,
    message: "dummy job get API",
  });
};

export { createJob, getJob };