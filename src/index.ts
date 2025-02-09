import express from "express"

const app =express();
app.post("/api/v1/signup",(req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;
     res.json({
        message:"You are signed up"
     })
})
app.post("/api/v1/signin",(req,res)=>{
    
})
app.post("/api/v1/content",(req,res)=>{

})
app.get("/api/v1/content",(req,res)=>{

})
app.delete("/api/v1/content",(req,res)=>{

})
app.post("/api/v1/brain/share",(req,res)=>{

})
app.get("/api/v1/brain/:sharelink",(res,req)=>{
    
})
app.listen(3000);