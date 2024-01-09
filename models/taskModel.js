const mongoose=require("mongoose");
const taskModel=mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    },
    task:{
        type:String,
        required:[true,"Please add the task name"]
    }
},{
    timestamps:true
});
module.exports=mongoose.model("Task",taskModel);