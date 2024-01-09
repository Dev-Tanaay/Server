const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");
const validation=asyncHandler(async(req,res,next)=>{
    let token;
    let authorization=req.headers.authorization||req.headers.Authorization;
    if(authorization&&authorization.startsWith('Bearer')){
        token=authorization.split(' ')[1];
        jwt.verify(token,process.env.SECRET,(err,decoder)=>{
            if(err){
                console.log("The error is "+err);
            }
            req.user=decoder.user;
            next();
        });
        if(!token){
            res.status(403);
            throw new Error("Token expiry");
        }
    }
});
module.exports=validation;