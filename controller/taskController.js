const asyncHandler=require("express-async-handler");
const Task=require("../models/taskModel")
const getTask=asyncHandler(async(req,res)=>{
    const tasks=await Task.find({ user_id:req.user.id});
    res.send(tasks);
});
const postTask=asyncHandler(async(req,res)=>{
    const { task }=req.body;
    if(!task){
        res.status(401);
        throw new Error("Enter the task!!!");
    }
    const tasks= await Task.create({ task,user_id:req.user.id });
    await tasks.save();
    res.json(tasks);
});
const updateTask=asyncHandler(async(req,res)=>{
    const id=await Task.findById(req.params.id);
    if(!id){
        res.status(401);
        throw new Error("Params Error!!!");
    }
    console.log(req.user.id);
    if(id.user_id.toString()!==req.user.id){
        res.status(401);
        throw new Error("Not proper user");
    }
    const tasks=await Task.findByIdAndUpdate(req.params.id,req.body);
    await tasks.save();
    res.json({"message":"Updated the items"});
});
const deleteTask=asyncHandler(async(req,res)=>{
    const id=await Task.findById(req.params.id);
    if(!id){
        res.status(401);
        throw new Error("Give proper params please!!!");
    }
    if(id.user_id.toString()!==req.user.id){
        res.status(401);
        throw new Error("Not proper user");
    }
    const tasks=await Task.findByIdAndDelete(req.params.id);
    res.json({"message":"Deleted the item"});
    await tasks.save();
});
const clearAll=asyncHandler(async(req,res)=>{
    const clear=await Task.deleteMany({});
    res.json({"message":"Deleted all the tasks"})
});
module.exports={ getTask,postTask,updateTask,deleteTask,clearAll };