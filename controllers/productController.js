
import productModel  from "../models/productModel.js";
import slugify from 'slugify';
import fs from 'fs';

export const createProductController = async (req, res) => {
    try {
        const { name,quantity,category,description,price,rentalP } = req.fields;
        const {photo}=req.files;
        //validation
        console.log(req.files);
            if (!name)
                return res.status(500).send({error:"Name is required"});
            if (!quantity)
                return res.status(500).send({error:"Quantity is required"});
            if( !category)
                return res.status(500).send({error:"Category is required"});
            if (!description)
                return res.status(500).send({error:"Description is required"});    
            if(!price)
                return res.status(500).send({error:"Price is required"});
            if(!rentalP)
                return res.status(500).send({error:"Price is required"});   
            if( !photo && ! photo.size > 1000000)
                return res.status(500).send({error:"Photo is required"}); 
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newProduct = await new productModel({
            ...req.fields,
            slug: slugify(name),
        })
        if(photo){
            newProduct.photo.data=fs.readFileSync(photo.path);
            newProduct.photo.contentType=photo.type;
        }
        await newProduct.save();
        res.status(201).send({
            success:true,
            message:'PRoduct Created',
            newProduct
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Category"
        });
    }

};


export const getProductController=async (req,res)=>{
    try {
        const products= await productModel.find({}).select("-photo").populate("category").limit(12).sort({createdAt:-1})
        res.status(200).send({
            success:true,
            countProd:products.length,
            message:"All Products",
            products
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting products',
            error:error.message
        })
    }
};


export const getOneProductController=async (req,res)=>{
    try {
        const prod=await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category");

        res.status(200).send({
            success:true,
            message:"Single Product Fetched",
            prod
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting the product",
            error:error
        });
    }
};

export const deleteProductController= async (req,res)=>{
    try {
        const prod=await productModel.findByIdAndDelete(req.params.pid).select("-photo");
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

export const getProductPhoto=async(req,res)=>{
    try {
        const prod=await productModel.findById(req.params.pid).select("photo");
        if(prod.photo.data){
            res.set('Content-type',prod.photo.contentType)
            res.status(200).send(prod.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Get Photo Failed",
            error
        })
    }
};
export const updateProductController=async(req,res)=>{
    try {
        const { name,quantity,category,description,price } = req.fields;
        const {photo}=req.files;
        //validation
        console.log(req.files);
            if (!name)
                return res.status(500).send({error:"Name is required"});
            if (!quantity)
                return res.status(500).send({error:"Quantity is required"});
            if( !category)
                return res.status(500).send({error:"Category is required"});
            if (!description)
                return res.status(500).send({error:"Description is required"});    
            if(!price)
                return res.status(500).send({error:"Price is required"});   
            if( !photo && ! photo.size > 1000000)
                return res.status(500).send({error:"Photo is required"}); 
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newProduct = await new productModel.findByIdAndUpdate(req.params.pid,{
            ...req.fields,
            slug: slugify(name),
        },{new:true});
        if(photo){
            newProduct.photo.data=fs.readFileSync(photo.path);
            newProduct.photo.contentType=photo.type;
        }
        await newProduct.save();
        res.status(201).send({
            success:true,
            message:'Product Updated',
            newProduct
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

export const productListController = async (req, res) => {
    try {
      const perPage = 12;
      const page = req.params.page ? req.params.page : 1;
      const products = await productModel
        .find({})
        .select("-photo")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ createdAt: -1 });
      res.status(200).send({
        success: true,
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "error in per page ctrl",
        error,
      });
    }
  };

  export const productCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      const products = await productModel.find({ category }).populate("category");
      res.status(200).send({
        success: true,
        category,
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        error,
        message: "Error While Getting products",
      });
    }
  };