import mongoose from "mongoose";
const addressSchema=new mongoose.Schema({
  
            addressL:{
                type:String,
                required:true
            },
            city: {
                type:String,
                required:true
            },
            state:{
                type:String,
                required:true
            },
            pincode:{
                type:Number,
                required:true
            },
            uid:{
                type:mongoose.ObjectId,
                ref:'users',
                required:true,
            }
},{timestamps:true});
export default mongoose.model('Address',addressSchema);