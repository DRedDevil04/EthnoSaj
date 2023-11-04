
import orderModel  from "../models/orderModel.js";

import userModel from "../models/userModel.js";

export const createOrderController = async (req, res) => {
    try {
        const {uid,item,cost,deliverAdd,rentDuration} = req.fields;
        //validation
        
        if (!item)
            return res.status(500).send({error:"Item is required"});
        if (!cost)
            return res.status(500).send({error:"Cost is required"});
        if( !deliverAdd)
            return res.status(500).send({error:"Deliver Address is required"});
        if (!rentDuration)
            return res.status(500).send({error:"Rent Duration is required"});    
        console.log(cost);
        const newOrder = await new orderModel({
           item,
           cost,
           deliverAdd,
           rentDuration,
           uid
        });
        
        await newOrder.save();
    
      
        const users=await userModel.findByIdAndUpdate(uid,{$push:{orders:newOrder._id}});
        await users.save();
        res.status(201).send({
            success:true,
            message:'Order Created',
            newOrder
        })
       
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Order Creation"
        });
    }

};


export const getOrderController=async (req,res)=>{
    try {
        // const oid=req.params.oid;
        const uid=req.params.uid;
        const orderA= await orderModel.find({uid:uid}).populate("deliverAdd").limit(15);
        
        res.status(200).send({
            success:true,  
            message:"All Orders",
            orderA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting orders',
            error:error.message
        })
    }
};

export const getOneOrderController=async (req,res)=>{
    try {
        const {oid,uid}=req.params;
        const orderA= await orderModel.findById(oid).populate('deliverAdd');
        
        res.status(200).send({
            success:true,  
            message:"Returned Order",
            orderA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting orders',
            error:error.message
        })
    }
};


export const deleteOrderController= async (req,res)=>{
    try {
        const orderV=await orderModel.findByIdAndDelete(req.params.pid);
        res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Delete",
            error
        })
    }
};


export const updateOrderController=async(req,res)=>{
    try {
        const {uid,item,cost,deliverAdd,rentDuration} = req.fields;
        const id=req.params.oid;
        
        //validation
        
            if (!item)
                return res.status(500).send({error:"Item is required"});
            if (!cost)
                return res.status(500).send({error:"Cost is required"});
            if( !deliverAdd)
                return res.status(500).send({error:"Deliver Address is required"});
            if (!rentDuration)
                return res.status(500).send({error:"Rent Duration is required"});    
            
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newOrd = await orderModel.findByIdAndUpdate(id,{
            item,cost,deliverAdd,rentDuration
        },{new:true});
        
        await newOrd.save();
        res.status(201).send({
            success:true,
            message:'Order Updated',
            newOrd
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updation"
        });
    }

};
