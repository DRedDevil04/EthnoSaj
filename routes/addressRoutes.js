import express from "express";
import { createAddressController, deleteAddressController, getAddressController, updateAddressController } from "../controllers/addressControllers.js";
import formidable from "express-formidable";
import { requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router=express.Router();

//router
//Address ROUTES|| METHOD POST
router.post('/add-address/',requireSignIn,formidable(),createAddressController);
router.get('/get-address/',requireSignIn,formidable(),getAddressController);
router.post("/update-address/:pid",requireSignIn,formidable(),updateAddressController);
router.post('/delete-address/:pid',requireSignIn,deleteAddressController);
export default router;