const path = require("path");
const express = require("express");
const hbs = require("hbs");
const apps= express();

apps.set("view engine","hbs");

const staticpath=path.join(__dirname,"../public");
//apps.use(express.static(staticpath));
const templatepath=path.join(__dirname,"../template/views");
const partialspath =path.join(__dirname,"../template/partials");
hbs.registerPartials(partialspath);
apps.set("views",templatepath);
apps.get("",(req,res)=>{
 res.render('index');
});
apps.get("/about",(req,res)=>{
    res.render('about',{
        name : req.query.name
    });
});
apps.get("",(req,res)=>{
    res.render('header');
});
apps.get("",(req,res)=>{
    res.render('footer');
});
apps.get("/",(req,res)=>{
 res.send("<h1>vishal first express code</h1>");
});

apps.get("/about",(req,res)=>{
    res.json([
        {
        id:1,
        name:"vishal"
    },
    {
        id:1,
        name:"vishal"
    }

]);
});

apps.listen(3000,()=>{
    console.log("listing the port");
});