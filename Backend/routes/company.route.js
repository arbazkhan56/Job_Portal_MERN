import express from 'express';
import { auth } from '../middlewares/auth.js';
import { getAllCompanies, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';

const route = express.Router()

route.post('/register', auth , registerCompany)
route.get('/getAllCompanies', auth , getAllCompanies)
route.get('/getCompanyById/:id', auth , getCompanyById)
route.put('/updateCompany/:id', auth , updateCompany)

export default route