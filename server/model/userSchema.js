const mongoose = require('mongoose')
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
const UserModel = mongoose.model('testings',UserSchema)
module.exports = UserModel