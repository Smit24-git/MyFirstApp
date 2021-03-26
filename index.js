//import dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//express setup
var myApp= express();

//setup path to public and view folders

myApp.set("views",path.join(__dirname,'views'));
myApp.set("view engine","ejs");

myApp.use(express.static(__dirname+"/public"));

myApp.use(bodyParser.urlencoded({extended: true}));

myApp.listen(8080);

myApp.get("/",(req,res)=>{
    res.render("home");
});

console.log("click on this link: http://localhost:8080");

