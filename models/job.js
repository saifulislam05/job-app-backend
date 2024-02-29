import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type:String,
        required:true
    },
    company: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required: true,
        default:0,
    }
})

const jobModel=mongoose.model("jobs", jobSchema)

export default jobModel;