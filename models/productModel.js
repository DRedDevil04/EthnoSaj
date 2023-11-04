import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    price:{
        type:Number,
        required :true
    },
    quantity:{
        type:Number,
        default:0,
    },
    description:{
        type:String,
        required:true,
    },
    photo:{
        data: Buffer,
        contentType:String
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Category',
        required:true
    }
},{timestamps:true});

export default mongoose.model("Products",productSchema);