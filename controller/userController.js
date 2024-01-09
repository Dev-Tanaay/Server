const bcrypt=require("bcrypt");
const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel");
const userRegister=asyncHandler(async(req,res)=>{
    const {username,email,passwd }=req.body;
    if(!username||!email||!passwd){
        res.status(400);
        throw new Error("Not registered properly");
    }
    const userAvailable=await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("Email alreday registered");
    } 
    const hashedPasswd=await bcrypt.hash(passwd,10);
    const user=await User.create({
        username,
        email,
        passwd:hashedPasswd
    });
    res.json(user);
});
const userLogin=asyncHandler(async(req,res)=>{
    const {email,passwd}=req.body;
    if(!email||!passwd){
        res.status(401);
        throw new Error("Not proper login....");
    }
    const user=await User.findOne({ email });
    if(user&&(await bcrypt.compare(passwd,user.passwd))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.SECRET);
        res.send(accessToken);
    }else{
        res.status(401);
        throw new Error("Not proper email or passwd");
    }
});
const user=asyncHandler(async(req,res)=>{
    res.json(req.user);
});

module.exports={ userRegister,userLogin,user };