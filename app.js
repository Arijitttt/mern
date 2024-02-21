const express = require('express')
const app = express()
app.get('/',(req,resp)=>{
    resp.send(`Homepage`);
})
app.get('/about',(req,resp)=>{
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