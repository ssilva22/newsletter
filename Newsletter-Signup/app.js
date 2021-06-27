const bodyParser = require('body-parser');
const express= require('express');


const app= express();

app.listen(2000, function(){
    console.log("Server started on port 2000");
});