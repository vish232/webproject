const express = require("express");
const app =express();
app.get("/", (req, res) =>{
 res.send("hello world for express");
});

app.get("/about",(req,res)=>{
    res.send("Hello world for About Page");
});
app.get("/contact",(req,res)=>{
    res.send("Hello world for Contact page");
});
app.listen(3000,()=>{
    console.log("listing the port 8000");
});