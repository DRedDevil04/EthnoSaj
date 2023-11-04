import express from 'express';
import formidable from 'express-formidable';
import {addToCartController,removeFromCartController} from "../controllers/cartControllers.js";
import { requireSignIn } from '../middleware/authMiddleware.js';

// Route
const router=express.Router();

// routes
router.post("/addToCart/",requireSignIn,formidable(),addToCartController);
router.post("/removeFromCart/",requireSignIn,formidable(),removeFromCartController);

export default router;