const mongoose=require("mongoose");

const productSchma=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    cotegory:String,
    rating:Number
   
})

const oderProductModel=mongoose.model("oderProduct",productSchma);
module.exports={
    oderProductModel
}
//product model for oder