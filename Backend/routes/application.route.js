import express from 'express';
import {auth} from '../middlewares/auth.js';
import { applyJob, getApplicant, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';
const route= express.Router();

route.get('/applyJob/:id', auth, applyJob);
route.get('/getAppliedJobs', auth, getAppliedJobs);
route.get('/:id/getApplicant', auth, getApplicant);
route.post('/status/:id/updateStatus', auth, updateStatus);

export default route;
