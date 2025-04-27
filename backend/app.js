import express from "express";
import env from "dotenv";
import cors from "cors";
import main from "./init/mongo.js";

env.config();
const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
    console.log("hello world");
});
  
main().then(()=>{
    console.log("-> -> connection succssfull with mongoose.")
}).catch(err=>{
    console.log(err);
});

app.listen(process.env.PORT,()=>{
    console.log("-> -> The server is connected with port.");
});



