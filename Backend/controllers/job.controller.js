import Job from '../models/job.model.js'

//admin post lrega job
export const jobPost = async (req, res) => {
    try {
        const {title, company, location, description, salary, jobtype, experienceLevel, requirement, position} = req.body;
        const userId = req.id

    if(!title ||!company ||!location ||!description ||!salary ||!jobtype ||!experienceLevel ||!requirement|| !position) {
        return res.status(400).json({msg: "All fields are required", success: false});
    }

    const newJob = new Job({
        title,
        company,
        location,
        description,
        salary: Number(salary),
        jobtype,
        position,
        experienceLevel,
        requirement: requirement.split(","),
        createdBy: userId
    });
    
    await newJob.save();
    
    res.status(201).json({msg: "Job posted successfully", success: true, newJob: newJob});
    } catch (error) {
        console.log(error);
    }
}

//students
export const getAllJobs = async (req, res) => {
    try {
        const keywords = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keywords, $options: 'i' } },
                { description: { $regex: keywords, $options: 'i' } }
            ]
        }

        const jobs = await Job.find(query).populate({
            path: 'company'
        }).sort({
            createdAt: -1
        });

        if(!jobs){
            return req.status(404).json({msg: "Job not found", success: false})
        }
        
        return res.status(200,{httpsOnly: true, sameSite: 'strict' }).json({msg: "get all jobs list",success:true, jobs: jobs});

    } catch (error) {
        console.log(error);
    }
}

//students
export const getJobById = async (req, res) => {
    const jobId = req.params.id;

    const jobs = await Job.findById(jobId);

    if(!jobs){
        return req.status(404).json({msg: "Job not found", success: false})
    }
    
    return res.status(200).json({msg: "get job by id", success:true, job: jobs});
}

//admin kitne job create kra h abhi tk

export const getAllJobsForAdmin = async (req, res) => {
    try {

        const adminId = req.id;
        const jobs = await Job.find({createdBy: adminId});

        if(!jobs){
            return req.status(404).json({msg: "Job not found", success: false})
        }
        
        return res.status(200).json({msg: "get all jobs list",success:true, jobs: jobs});

    } catch (error) {
        console.log(error);
    }
}

