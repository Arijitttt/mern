const express = require('express')
const router = express.Router()

router.get('/',(req,resp)=>{
    resp.send(`Homepage from router.js`);
})

router.post('/register',(req,resp)=>{
    console.log(req.body);
    resp.send(req.body);
})
module.exports = router