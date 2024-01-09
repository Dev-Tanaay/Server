const mongoose=require("mongoose");
const userModel=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the username"]
    },
    email:{
        type:String,
        required:[true,"Please add the username"],
        unique:[true,"Please add the unique email"]
    },
    passwd:{
        type:String,
        required:[true,"Please add the password"]
    }
});
module.exports=mongoose.model("User",userModel);