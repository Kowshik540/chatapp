import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();

const app=express()

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)


app.listen((process.env.PORT || 3000),()=>{
    console.log("server runnuig on 3000");
})