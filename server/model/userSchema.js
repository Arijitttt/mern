const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Define User Schema
mongoose.connect("mongodb://127.0.0.1/Map")
const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    
    email:{type:String,required:true},

    phone:{type:Number,required:true},

    work:{type:String,
    required:true},
    
    password : { type: String , required: true },

    cpassword : { type: String , required: true },

    tokens:[
        {
            token:{type:String,required:true}
        }
    ]
})

//Hashing Password
UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
        this.cpassword = await bcrypt.hash(this.cpassword, 8)
    }
    next()
})

//generating token
UserSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(err){
        console.log(err)
    }
}


const UserModel = mongoose.model('testings',UserSchema)
module.exports = UserModel


