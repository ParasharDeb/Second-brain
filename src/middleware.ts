
import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
export const Usermiddleware=(req:Request,res:Response,next:NextFunction)=>{
    
    const header=req.headers["authorization"];

    const decoded=jwt.verify(header as string, JWT_SECRET);
    
    if(decoded){
        //@ts-ignore
        req.userId=decoded.id;
        console.log("1")
        next();
    }
    else {
        res.status(403).json({
            message:"you are not signed in"
        })
    }
}   