import mongoose from "mongoose";

const jobSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirement: [{
        type: String
    }],
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobtype: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    experienceLevel: {
        type: String,
        required: true
    },
    application: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
}, {
    timestamps: true
})

const jobModels = mongoose.model('Job', jobSchema)
export default jobModels;