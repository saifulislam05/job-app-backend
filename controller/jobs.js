const getJobs = (req, res) => {
  res.json({
    success: true,
    message: "Demo job getting api",
  });
};

const createJob = (req, res) => {
    const bodyData = req.body;
    console.log(bodyData);
  res.json({
    success: true,
    message: "Demo job creting api",
  });
};


export { getJobs, createJob };