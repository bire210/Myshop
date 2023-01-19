const express =require("express");
const {connection}=require("./config/db")
const {AdminRouter}=require("./routes/admin.route");
const { ProductRouter }=require("./routes/product.route");
const {admiauthenticate}=require("./midleware/admin.authenticate.midleware")
const {ProductModel}=require("./models/product.model")
const {generalRouter}=require("./routes/genral.route");
require('dotenv').config();
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors({origin:"*"}))
app.use("/",generalRouter);
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