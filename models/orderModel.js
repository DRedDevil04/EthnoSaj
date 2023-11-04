import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    status: {
        type: String,
        default: "Placed",
        enum: ["Not Process", "Processing", "Shipped", "Delivered", "cancel"]
    },
    cost: {
        type: Number,
        required : true,
    },
    item: {
        type : mongoose.ObjectId,
        ref:'Products',
        required:true
    },
    deliverAdd:{
        type : mongoose.ObjectId,
        ref:'Address',
        required:true
    },
    rentDuration:{
        //in days
        type : Number,
        required:true
    },
    uid:{
        type:mongoose.ObjectId,
        ref:'users',
        required :true
    }
},{timestamps:true});
export default mongoose.model("Orders",orderSchema);
