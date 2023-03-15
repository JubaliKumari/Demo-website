const express = require("express");
const bodyParser = require("body-parser");
// const request =require("request");
const app = express();

app.get("/style2.css" ,function(req,res){
    res.sendFile(__dirname +"/login.html")
})


app.listen(3000, function(){
    console.log("app is running on the port 3000")
})
