import mongoose from "mongoose";
import cartModel from "./cartModel.js";
const accountSchema=new mongoose.Schema({
    cart:{
        type:mongoose.ObjectId,
        required : true,
        unique:true
    },
    user:{
        type:mongoose.ObjectId,
        required:true,
        unique:true
    }
});
export default mongoose.model('Account',accountSchema);