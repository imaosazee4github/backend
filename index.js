import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";



const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to mongoDB")
        
    }catch(error){
       throw error;
    }

};
mongoose.connection.on("disconnected", () => {
    connect()
    console.log("MongoDB disconnected!")
    
})




app.listen(8080, () => {
    connect()
    console.log("Server is running on port 8080")
})