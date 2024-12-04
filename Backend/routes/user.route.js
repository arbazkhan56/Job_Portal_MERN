import express from 'express';
import { login, logout, register, updateUser } from '../controllers/user.controller.js';
import { auth } from '../middlewares/auth.js';
import { uploadFileMulter } from '../middlewares/multer.js';

const routes = express.Router();

routes.post('/register',uploadFileMulter, register)
routes.post('/login', login)
routes.get('/logout', logout)
routes.post('/profile/user',auth,uploadFileMulter, updateUser)

export default routes;