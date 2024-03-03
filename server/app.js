const express = require('express')
//const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const DB = 'mongodb+srv://abhattacharya030:table@table.rw8gnnh.mongodb.net/?retryWrites=true&w=majority&appName=table'

const saveInDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1/Map")
    const ProductSchema = new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
    })
    const productModel=mongoose.model('testings',ProductSchema)
    let data=new productModel({
        name:"Manisha Bhattacharya",
        email:"bhattacharya@gmail.com",
        age:22
    })
    let result = await data.save()
    console.log(result);
}
saveInDB()

//middleware
const middleware = (req,resp,next)=>{
    console.log(`this is my middleware`);
    next(); 
}




app.get('/',(req,resp)=>{
    resp.send(`Homepage`);
})
app.get('/about',middleware,(req,resp)=>{
    resp.send(`about Page`);
})
app.get('/contact',(req,resp)=>{
    resp.send(`contact`);
})
app.get('/login',(req,resp)=>{
    resp.send(`login page`);
})
app.get('/register',(req,resp)=>{
    resp.send(`registration page`);
})
app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})