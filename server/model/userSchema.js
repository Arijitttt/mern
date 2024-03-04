const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
mongoose.connect("mongodb://127.0.0.1/Map")
const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    
    email:{type:String,required:true},

    phone:{type:Number,required:true},

    work:{type:String,
    required:true},
    
    password : { type: String , required: true },

    cpassword : { type: String , required: true }
})

//Hashing Password
UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
        this.cpassword = await bcrypt.hash(this.cpassword, 8)
    }
    next()
})


const UserModel = mongoose.model('testings',UserSchema)
module.exports = UserModel


