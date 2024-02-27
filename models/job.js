import mongoose from "mongoose"

const jobSchema = {
    title: {
        type:String
    },
    description: {
        type:String
    },
    company: {
        type:String
    },
    location: {
        type:String
    },
    salary: {
        type:String
    }
}

const jobModel=mongoose.model("jobs", jobSchema)

export default jobModel;