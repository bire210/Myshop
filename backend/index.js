const express =require("express");
const {connection}=require("./config/db")
const {AdminRouter}=require("./routes/admin.route");
const { ProductRouter }=require("./routes/product.route");
const {admiauthenticate}=require("./midleware/admin.authenticate.midleware")
require('dotenv').config();
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors({origin:"*"}))
app.get("/",(req,res)=>{
    res.json("This is home page");

    console.log("Home page");
})
app.use("/admin",AdminRouter)

app.use("/product",admiauthenticate,ProductRouter)

app.listen(process.env.port,async()=>{

    try {
        await connection;
        console.log("data base is connected")
    } catch (error) {
        console.log("Database is not connected")
        console.Console.log(error);
    }
    console.log(`server is running over ${process.env.port}`)
})