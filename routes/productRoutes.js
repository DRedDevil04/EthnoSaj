import express from "express";
import formidable from "express-formidable";
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js";
import { createProductController, deleteProductController, getOneProductController, getProductController, getProductPhoto, updateProductController } from "../controllers/productController.js";
//router object
const router = express.Router();


//router

router.post('/create-product', requireSignIn, isAdmin,formidable(), createProductController);
router.post('/update-product/:pid', requireSignIn, isAdmin,formidable(), updateProductController);
router.get('/get-product',getProductController);
router.get('/get-product/:slug',getOneProductController);
router.get('/delete-product/:pid',requireSignIn,isAdmin,deleteProductController);
router.get('/get-photo/:pid',getProductPhoto);
export default router;