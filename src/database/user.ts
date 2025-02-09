import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;


//Userschema
const userSchema = new Schema({
    _id:ObjectId,
    email:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const Usermodel=mongoose.model("User",userSchema);


//Tag Schema
const tagSchema=new Schema({
    _id:ObjectId,
    tag:{type:String,unique:true,required:true}
})
const Tag=mongoose.model("Tag",tagSchema);



//Content Schema 
const ContentSchema=new Schema({
    _id:ObjectId,
    link:String,
    type:String,
    title:String,
    tags:String,
    UserId:ObjectId
})
module.exports={
    Usermodel, Tag
}