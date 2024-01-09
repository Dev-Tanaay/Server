const express=require("express");
const dotenv=require("dotenv").config();
const connect=require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors=require("cors");
const app=express();
const port = process.env.PORT||3000;
connect();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use("/tasks",require("./routes/task"));
app.use("/user",require("./routes/user"));
app.listen(port,()=>{
    console.log("Server started running......");
});