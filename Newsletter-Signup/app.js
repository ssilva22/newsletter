//jshint esversion:6
const express= require('express');
const bodyParser = require('body-parser');
const request = require('request');
const nodemon= require('nodemon');


const app= express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.listen(2000, function(){
    console.log("Server started on port 2000");
});