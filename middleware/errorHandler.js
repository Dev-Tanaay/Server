const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:401;
    res.json({"message":err.message,"stackTrace":err.stack});
}

module.exports=errorHandler;