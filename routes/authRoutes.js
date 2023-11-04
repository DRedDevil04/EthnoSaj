import express from "express";
import {registerController,loginController, forgotPasswordController, profileUpdateController} from '../controllers/authController.js'

//router object
const router=express.Router();


//router
//REGISTER|| METHOD POST
router.post('/register',registerController);
router.post('/login',loginController);
router.post("/forgot-password",forgotPasswordController);
router.post('/profile-update',profileUpdateController);
export default router;