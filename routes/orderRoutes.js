import express from "express";
import { createOrderController, deleteOrderController, getOneOrderController, getOrderController, updateOrderController } from "../controllers/orderControllers.js";
import formidable from "express-formidable";
import { requireSignIn } from "../middleware/authMiddleware.js";
//router object
const router=express.Router();


//router
//REGISTER|| METHOD POST
router.post('/create-order',requireSignIn,formidable(),createOrderController);
router.post('/update-order/:oid',requireSignIn,formidable(),updateOrderController);
router.post("/delete-order/:pid",requireSignIn,deleteOrderController);
router.get('/get-order',requireSignIn,getOrderController);
router.get('/get-order/:oid',requireSignIn,getOneOrderController);
export default router;