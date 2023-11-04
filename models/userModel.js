import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true
    },
    email:{
        type : String ,
        required:true, 
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    },
    cart:{
        type:[{type:mongoose.ObjectId,ref:'Products'}],
       
        
    },
    orders:{
        type:[{type:mongoose.ObjectId,ref:'Orders'}],
        
        
    },
    addresses:{
        type: [{type:mongoose.ObjectId, ref:'Address'}],
        
        
    }

},{timestamps:true});
export default mongoose.model('users',userSchema);