const express=require("express")
const mongodb= require('mongodb')
const app=express()
const port=require('./constants/constant')
const todoRouter = require("./routes/todo")

const db = require("./config/connection")

db.connect((err)=>{
    if(err)throw err
    console.log("database connected");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/',todoRouter)

app.listen(port,()=>{
    console.log("Localhost 3000 server is running....");
})