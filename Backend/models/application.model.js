import mongoose from "mongoose";

const applicationSchema =new mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "accepted", "rejected"]
    }
}, {
    timestamps: true
})

const companyModel= mongoose.model("Application", applicationSchema);

export default companyModel;