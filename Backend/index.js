// const express = require('express')
// const dotenv = require('dotenv')
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
const app = express()

app.use(cors())

app.use(express.json())

import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

dotenv.config();

const PORT = process.env.port || 3001
const URI = process.env.MONGODB_URI

//connect to mongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connected to mongodb")
}catch(error){
    console.log("Error",error)
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Example app listening on http://localhost:${PORT}`)

})