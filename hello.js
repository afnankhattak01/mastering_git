console.log("hello")
console.log('another beautiful console.log message::');
console.log("a new feature has been implemented and shipped!");
console.log("urgent fixed completed successfully!");

//start working on creating a express app

const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    console.log('hello world!');
})




app.listen(3000,()=>{
    console.log("Server is up and running!!")
})