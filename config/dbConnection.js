const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Database connected");
    }catch(e){
        console.log("The error is--> "+e);
    }
}
module.exports=connectDb;