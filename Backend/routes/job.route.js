import express from 'express';
import {auth} from '../middlewares/auth.js';
import { getAllJobs, getAllJobsForAdmin, getJobById, jobPost } from '../controllers/job.controller.js';
const route = express.Router();

route.post('/jobPost', auth, jobPost)
route.get('/getAllJobs',auth, getAllJobs)
route.get('/getJobById/:id', auth, getJobById)
route.get('/getAllJobsForAdmin', auth, getAllJobsForAdmin)

export default route;