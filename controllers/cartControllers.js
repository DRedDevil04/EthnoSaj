import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";



export const addToCartController=async(req,res)=>{
    try {
        //const {uid}=req.params;
        const {uid,prod}=req.fields;
        
        const products=await productModel.findById(prod).select("-photo");
        const users=await userModel.findByIdAndUpdate(
            uid,
            {$push:{cart:prod}
        });

        await users.save();
        res.status(201).send({
            success:true,
            message: "added to cart",
            products
        })
        // const users=await userModel.find({_id:id,{$push:{cart:prod}});
        
    } catch (error) {
        console.log (error);
        res.status(500).send({
            success:false,
            message:"Add to Cart Failed",
            error
        })
    }  
};

export const removeFromCartController=async(req,res)=>{
    try {
        const {uid,prod}=req.fields;
        const products=await productModel.findById(prod).select('-photo');
        const user=await userModel.findByIdAndUpdate(uid,{$pull:{cart:prod}});
        await user.save();
        res.status(201).send({
            success:true,
            message:"Removed from Cart",
            products
        })
    } catch (error) {
        console.log (error);
        res.status(500).send({
            success:false,
            message:"Remove from Cart Failed",
            error
        })
    }  
};


