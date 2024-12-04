import Company from '../models/company.model.js'

export const registerCompany = async (req, res) =>{
    try {
        const {companyName} = req.body
        if(!companyName) {
            return res.status(400).json({msg: "Company name is required", success: false});
        }
        
        let existingCompany = await Company.findOne({companyName})
        if(existingCompany) {
            return res.status(400).json({msg: "Company already exists", success: false});
        }
        
        const newCompany = new Company({
            companyName,
            userId: req.id
        })
        
        await newCompany.save()
        
        return res.status(200).json({msg: "Company registered successfully", success: true, company: newCompany})



    } catch (error) {
        console.log(error);
    }
}

export const getAllCompanies = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({userId})
        
        if(!companies) {
            return res.status(404).json({msg: "No companies found", success: false});
        }
        return res.status(200).json({msg: "list of all companies",success: true, company: companies});

    } catch (error) {
        console.log(error);
    }
}

export const getCompanyById = async (req, res) => {
    try {
        // const userId = req.id;
        const companyId = req.params.id
        const company = await Company.findById(companyId)
        // const company = await Company.findById(companyId).populate("userId", "name")
        
        if(!company) {
            return res.status(404).json({msg: "Company not found", success: false});
        }
        // if(company.userId.toString()!== userId) {
        //     return res.status(403).json({msg: "Unauthorized access", success: false});
        // }
        return res.status(200).json({msg: "Company details", success: true, company: company});

    }catch(error) {
        console.log(error);
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {companyName, description, website, location} = req.body;

        const companyData = await Company.findByIdAndUpdate(req.params.id, {companyName, description, website, location}, {new: true})

        if(!companyData) {
            return res.status(404).json({msg: "Company not found", success: false});
        }
        return res.status(200).json({msg: "Company updated successfully", success: true, company: companyData});

        
    } catch (error) {
        console.log(error);
    }
}