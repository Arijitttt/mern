const express = require('express')
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')

dotenv.config({path:'./.env'});

const PORT = process.env.PORT



require('./db/conn.js');
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
app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`);
})