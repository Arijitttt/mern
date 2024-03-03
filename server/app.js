const express = require('express')
//const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const DB = 'mongodb+srv://abhattacharya030:table@table.rw8gnnh.mongodb.net/?retryWrites=true&w=majority&appName=table'

//require('./db/conn.js');
//const User = require('./model/userSchema')

app.use(express.json())
app.use(require('./router/auth'))


//middleware 
const middleware = (req,resp,next)=>{
    console.log(`this is my middleware`);
    next(); 
}




// app.get('/',(req,resp)=>{
//     resp.send(`Homepage`);
// })
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