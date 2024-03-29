const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
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
        console.log(userExist)

        if (userExist) {
            return resp.status(422).json({ error: "Email already exist" })
        } else if (password != cpassword) {
            return resp.status(422).json({ error: 'Password does not match' });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })

            const userRegister = await user.save()

            if (userRegister) {
                console.log(userRegister);
                return resp.status(201).json({ Message: "user registered successfully" })
            }
        }


    } catch (err) {
        console.log(err);
    }
})


router.post('/signin', async (req, resp) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return resp.status(400).json({ error: "Please provide your email and password." })
        }

        const userLogin = await User.findOne({ email: email })
        //console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password)


            const token =await userLogin.generateAuthToken()
            console.log(token);
            
            //cookie
            resp.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                return resp.status(400).json({ error: "Invalid Credentials" })
            } else {
                resp.status(200).json({ message: "Signin successful" })
                console.log('Signin Successful');
            }
        }
    } catch (err) {
        console.log(err)
        resp.status(500).send("Internal Server Error")
    }
})

module.exports = router