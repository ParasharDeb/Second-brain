import { Schema,model} from "mongoose";
import mongoose  from "mongoose";

const ObjectId=Schema.ObjectId;


//Userschema
const userSchema = new Schema({
    email:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
export const Usermodel=model("User",userSchema);


//Tag Schema
const tagSchema=new Schema({
    tag:{type:String,unique:true,required:true}
})
export const Tagmodel=model("Tag",tagSchema);



//Content Schema 
const ContentSchema=new Schema({
    link:String,
    type:String,
    title:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    userId:[{type:mongoose.Types.ObjectId,ref:'User',required:true}]
})
export const Contentmodel=model("Content",ContentSchema)