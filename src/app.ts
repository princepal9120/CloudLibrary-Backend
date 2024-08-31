import express from "express";
const app=express();
//Routes

app.get('/',(req,res)=>{
    res.json({message: "welcome to cloudLibrary apis"})
});

export default app;