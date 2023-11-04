
import addressModel  from "../models/addressModel.js";

import userModel from "../models/userModel.js";

export const createAddressController = async (req, res) => {
    try {

        const { addressL,city,state,pincode ,uid} = req.fields;
        //validation
        
            if (!addressL)
                return res.status(500).send({error:"addressL is required"});
            if (!city)
                return res.status(500).send({error:"City is required"});
            if( !state)
                return res.status(500).send({error:"State is required"});
            if (!pincode)
                return res.status(500).send({error:"Pincode is required"});    
            if(!uid)
                return res.status(500).send({error:"UID is required"});   
            
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newAddress = await new addressModel({
            addressL,city,state,pincode,uid
        })
        
        await newAddress.save();
        const users=await userModel.findByIdAndUpdate(uid,{$push:{addresses:newAddress._id}});
        users.save()
        res.status(201).send({
            success:true,
            message:'Address Created',
            newAddress
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Address Add"
        });
    }

};


export const getAddressController=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const addressesA= await userModel.find({uid}).populate('addresses');
        
        res.status(200).send({
            success:true,  
            message:"All Addresses",
            addressesA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting addresses',
            error:error.message
        })
    }
};


export const deleteAddressController= async (req,res)=>{
    try {
        const addr=await addressModel.findByIdAndDelete(req.params.pid);
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


export const updateAddressController=async(req,res)=>{
    try {
        const { addressL,city,state,pincode ,uid} = req.fields;
        
        
        //validation
        
            if (!addressL)
                return res.status(500).send({error:"AddressL is required"});
            if (!city)
                return res.status(500).send({error:"City is required"});
            if( !state)
                return res.status(500).send({error:"State is required"});
            if (!pincode)
                return res.status(500).send({error:"Pincode is required"});    
            if(!uid)
                return res.status(500).send({error:"UID is required"});   
            
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newAdd = await addressModel.findByIdAndUpdate(req.params.pid,{
            addressL,city,state,pincode,uid
        },{new:true});
        
        await newAdd.save();
        res.status(201).send({
            success:true,
            message:'Address Updated',
            newAdd
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
