const express=require("express");
const { ProductModel }=require("../models/product.model")

const generalRouter=express.Router();
generalRouter.get("/",async(req,res)=>{
    try {
        const posts = await ProductModel.find();
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.json("Somthing is wrong")
    }
})

generalRouter.get("/search",async(req,res)=>{
    const name=req.query.name;
    try {
        const posts = await ProductModel.find({name:{$regex:name,$options:"i"}});
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.json("Somthing is wrong")
    }
})
  


module.exports={generalRouter};