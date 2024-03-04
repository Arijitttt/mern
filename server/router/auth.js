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
        console.log(userExist)

        if (userExist) {
            return resp.status(422).json({ error: "Email already exist" })
        }else if(password != cpassword){
            return resp.status(422).json({ error: 'Password does not match' });
        }else{
            const user = new User({ name, email, phone, work, password, cpassword })

        const userRegister = await user.save()

        if(userRegister){
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
        console.log(userLogin);

        if (!userLogin) {
            return resp.status(400).json({ error: "Invalid Credentials" })
        }

        if (password !== userLogin.password) {
            return resp.status(400).json({ error: "Invalid Credentials" })
        }

        // At this point, user is successfully authenticated
        // You can generate a token or set a session here
        resp.status(200).json({ message: "Signin successful" })

    } catch (err) {
        console.log(err)
        resp.status(500).send("Internal Server Error")
    }
})

module.exports = router