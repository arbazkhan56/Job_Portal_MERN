import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"
import cors from "cors"
import connectDB from "./utils/db.js"
import userroutes from "./routes/user.route.js"
import companyroutes from "./routes/company.route.js"
import jobroutes from "./routes/job.route.js"
import applicationroutes from "./routes/application.route.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    credentials: true,
}))
app.use(cookieparser());

app.use('/api/v1/user', userroutes)
app.use('/api/v1/company', companyroutes)
app.use('/api/v1/job', jobroutes)
app.use('/api/v1/application', applicationroutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB()
    console.log("connected Backend Succesful", PORT)
})