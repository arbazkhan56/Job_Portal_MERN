import Application from '../models/application.model.js';
import Job from '../models/job.model.js';

export const applyJob = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.id

        if(!jobId){
            return res.status(400).json({msg: "Job ID is required", success: false});
        }

        const existingApplication = await Application.findOne({applicant: userId, job: jobId});

        if(existingApplication) {
            return res.status(400).json({msg: "You have already applied for this job", success: false});
        }

        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(400).json({msg: "Job not found", success: false});
        }

        const newApplication = new Application({
            applicant: userId,
            job: jobId
        });
        await newApplication.save();
        Job.applicant.push(newApplication._id);
        return res.status(200).json({msg: "Application submitted successfully", success: true});
    
    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id
        const application = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: 'job',
            options: {sort:{createdAt: -1}},
            populate: {
                path: 'company',
                options: {sort:{createdAt: -1}},
            }
        })

        if(!application){
            return res.status(404).json({message:"Application not found", success: false})
        }
        return res.status(200).json({message : "application details updated", success:true, data: application})
    } catch (error) {
        console.log(error)
    }
}

//admikn dekhega kitne logo nai apply kiya h 
export const getApplicant = async (req, res) =>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'application',
            options: {sort:{createdAt: -1}},
            populate: {
                path: 'applicant',
                options: {sort:{createdAt: -1}},
            }
        })

        if(!job){
            return res.status(404).json({message:"Job not found", success: false})
        }

        return res.status(200).json({message : "application details updated", success:true, data: job.application})
    } catch (error) {
        console.log(error)
    }
}

// upate status 

export const updateStatus = async (req, res) => {
    try {
        const status = req.body
        const applicationId = req.params.id
        if(!status){
            return res.status(400).json({msg: "Status is required", success: false});
        }
        const application = await Application.findByIdAndUpdate(applicationId, {status}, {new: true})
        if(!application){
            return res.status(404).json({msg: "Application not found", success: false});
        }
        return res.status(200).json({msg: "Application status updated successfully", success: true, data: application})
        

    } catch (error) {
        console.log(error)
    }
}