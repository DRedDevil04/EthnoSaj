import express from "express";
import { createCategoryController } from "../controllers/categoryController.js";
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js";

//router object
const router=express.Router();


//router
//REGISTER|| METHOD POST
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);

export default router;