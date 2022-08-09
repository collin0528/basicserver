const express = require("express");
// require("dotenv").config();

const server = express();

server.get("/", function(request, response){
    response.send("Everything is working, my name is Collins Ndukwe, i am a software engineer");
})

server.get("/home", function(request, response){
    response.send("this is the home page welcome");
})


server.listen("4433", () => console.log("Server is working"));
