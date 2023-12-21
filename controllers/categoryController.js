import categoryModel from "../models/categoryModel.js";

import slugify from "slugify";

import productModel from "../models/productModel.js";
export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "Name is Required" })
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exists"
            })
        }
        const newCategory = await new categoryModel({
            name,
            slug: slugify(name)
        })
        .save();
        res.status(201).send({
            success:true,
            message:'Category Created',
            newCategory
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

export const categoryListController = async (req, res) => {
    try {
      const perPage = 12;
      const page = req.params.page ? req.params.page : 1;
      const category = await categoryModel.findOne({ slug: req.params.slug });
      const products = await productModel
        .find({category})
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

