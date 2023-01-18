const mongoose=require("mongoose");

const productSchma=mongoose.Schema({
    name:String,
    description:String,
    image:String,
    price:Number,
    cotegory:String,
    rating:Number,
    userID:String
})

const ProductModel=mongoose.model("product",productSchma);
module.exports={
    ProductModel
}
//product model for admin