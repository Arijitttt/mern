const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
mongoose.connect("mongodb://127.0.0.1/Map")
const User = require('../model/userSchema')
router.get('/', (req, resp) => {
    resp.send(`Homepage from router.js`);
})


//Promises...
// router.post('/register',(req,resp)=>{

//     const {name, email, phone, work, password, cpassword} = req.body

//     //resp.send(req.body);
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return resp.status(422).json({error:"please fill the data"})
//     }

//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return resp.status(422).json({error:"Email already exist"})
//         }

//         const user = new User({name, email, phone, work, password, cpassword}) 

//         user.save().then(()=>{
//             resp.status(201).json({message:"user registered successfully"})
//             console.log(`user registered successfully`);
//             console.log(user);
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }).catch((err)=>{
//         console.log(err)
//     })

// })

//Asyn Await...
router.post('/register', async (req, resp) => {

    const { name, email, phone, work, password, cpassword } = req.body

    //resp.send(req.body);
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return resp.status(422).json({ error: "please fill the data" })
    }


    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return resp.status(422).json({ error: "Email already exist" })
        }
        const user = new User({ name, email, phone, work, password, cpassword })

        const userRegister = await user.save()

        if(userRegister){
            console.log(userRegister);
            return resp.status(201).json({ Message: "user registered successfully" })
        }
    } catch (err) {
        console.log(err);
    }
})
module.exports = router