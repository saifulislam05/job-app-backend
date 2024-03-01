import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
        unique:true
    },
    company: {
        type: String,
        required:true,
    },
    location: {
        type: String,
        required:true,
    },
    salary: {
        type: Number,
        required:true,
    } 
})

const jobsModel = mongoose.model("jobs", jobSchema);
export default jobsModel;