//jshint esversion:6
const express= require('express');
const bodyParser= require('body-parser');
const request = require('request');
const { Http2ServerRequest } = require('node:http2');




const app= express();


app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded());


app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
const firstName = req.body.fname;
const email = req.body.email;

const data= {
    members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            },

        }
    ],
    
};
    const jsonData=JSON.stringify(data);

    const url="mailchimplistIDurl/listID";


    https.request(url, options, function(response))
});

app.listen(2000, function(){
    console.log("Server started on port 2000");
});