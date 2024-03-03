const mongoose = require('mongoose')
const saveInDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1/Map")
    const UserSchema = new mongoose.Schema({
        name:{type:String,required:true},
        
        email:{type:String,required:true},

        phone:{type:Number,required:true},

        work:{type:String,
        required:true},
        
        password : { type: String , required: true },

        cpassword : { type: String , required: true }
    })
    const userModel=mongoose.model('testings',UserSchema)
    let data=new userModel({
        name:"gg Bhattacharya",
        email:"bhattacharya@gmail.com",
        age:22
    })
    let result = await data.save()
    console.log(result);
}
saveInDB()