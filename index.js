import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from  './routes/authRoute.js'
import hotelsRoute from "./routes/hotelsRoute.js";
import userRoute from "./routes/userRoute.js";
import roomRoute from "./routes/roomRoute.js"



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
app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/hotel', hotelsRoute);
app.use('/api/user', userRoute);
app.use('/api/room',roomRoute);

app.use(express.json())

app.use((err,req,res,next) => {
    const errorStatus = err.Status || 500;
    const errorMessages = err.messages || "Something went Wrong!";
    return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    messages:errorMessages,
    stack:err.stack,
})
})


app.listen(8080, () => {
    connect()
    console.log("Server is running on port 8080")
})