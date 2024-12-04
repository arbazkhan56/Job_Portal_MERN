import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("DB Connected Successful")
    } catch (error) {
        console.log("DB Not Connected")
    }
}

export default connectDB