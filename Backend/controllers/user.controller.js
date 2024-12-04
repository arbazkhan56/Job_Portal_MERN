import User from '../models/user.model.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, password, role} = req.body;

    if(!fullName || !email || !phoneNumber || !password || !role) {
        return res.status(400).json({msg: "All fields are required", success: false});
    }

    const existingUser = await User.findOne({email});
    if(existingUser) {
        return res.status(400).json({msg: "User already exists", success: false});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        fullName,
        email,
        phoneNumber,
        password: hashedPassword,
        role
    });

    await newUser.save();

    return res.status(201).json({msg: "User registered successfully", success: true});
    } catch (error) {
        console.log(error);
    }
    
}

export const login = async (req, res) => {
   

try{
    const {email, password, role} = req.body;
    if(!email ||!password || !role) {
        return res.status(400).json({msg: "All fields are required", success: false});
    }

    let existingUser = await User.findOne({email});
    if(!existingUser) {
        return res.status(400).json({msg: "User Not already exists", success: false});
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if(!isMatch) {
        return res.status(400).json({msg: "Invalid credentials", success: false});
    }

    if(role !== existingUser.role){
        return res.status(400).json({msg: "Invalid role", success: false});
    }
    const tokenData = {
        token_id: existingUser._id
    }
    const token = jwt.sign(tokenData, process.env.SECRET_KEY)

    existingUser = {
        _id:existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        phoneNumber: existingUser.phoneNumber,
        role: existingUser.role,
        profile : existingUser.profile
    }
    return res.status(200).cookie("token", token).json({msg: "User logged in successfully", success: true, token, user: existingUser})

}catch(error) {
    console.log(error)
}
}

export const logout = async (req, res) => {
    try {
        return res.cookie("token", "").json({msg: "User logged out successfully", success: true})
    }catch{
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, bio, skills} = req.body

        let skillsArray 
        if(skills){
            skillsArray = skills.split(',')
        }
        

        const updatedUser = await User.findByIdAndUpdate(req.id, {fullName, email, phoneNumber, bio, skillsArray}, {new: true})
        return res.json({msg: "User updated successfully", success: true, user: updatedUser})

    } catch (error) {
        console.log(error);
    }
}