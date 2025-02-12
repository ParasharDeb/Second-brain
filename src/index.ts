import express from "express"
import { Contentmodel, Usermodel } from "./database/user";
import jwt  from "jsonwebtoken";
import mongoose from "mongoose";
import { JWT_SECRET } from "./config";
import { Usermiddleware } from "./middleware";


const app =express();
app.use(express.json());
mongoose.connect("mongodb+srv://parashardeb:isawunaked@cluster0.m5qmn.mongodb.net/Brainly")



app.post("/api/v1/signup",async (req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;
    try{await Usermodel.create({
        email:email,
        username:username,
        password:password
    })
     res.status(200). json({
        message:"You are signed up"
     })}
     catch(e){
        res.status(404).json({
            message:"Username already exists"
        })
     }
})
app.post("/api/v1/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const finduser=await Usermodel.findOne({
        username:username,
        password:password}
    )
    if(finduser){
        const token=jwt.sign({
            id:finduser._id
        },JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            Message:"Invalid Credentials"
        })
    }
    
})
app.post("/api/v1/content",Usermiddleware,async(req,res)=>{
    console.log("2")
    const link=req.body.link;
    const type=req.body.type;
    const title=req.body.title;

    try{await Contentmodel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json({
        message:"Content added"
    })}
    catch(e){
        res.status(404).json({
            message:"Server timed out"
        })
    }
})
app.get("/api/v1/content",Usermiddleware,async(req,res)=>{
    //@ts-ignore
    try{const userId=req.userId
    const content =await Contentmodel.find({ userId }).populate("userId","username")
    res.json({ content })}
    catch(e){
        res.json({
            message:"Server timed out"
        })
    }
})
app.delete("/api/v1/content",(req,res)=>{

})
app.post("/api/v1/brain/share",(req,res)=>{

})
app.get("/api/v1/brain/:sharelink",(res,req)=>{

})
app.listen(3000);