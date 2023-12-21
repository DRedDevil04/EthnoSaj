import express from "express";
import { categoryListController, createCategoryController } from "../controllers/categoryController.js";
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js";

//router object
const router=express.Router();


//router
//REGISTER|| METHOD POST
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);
router.get('/get-category/:slug/:page',categoryListController);

export default router;