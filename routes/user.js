const express=require("express");
const { userRegister, userLogin, user } = require("../controller/userController");
const validation = require("../middleware/validate");
const router=express.Router();
router.post("/register",userRegister);
router.post("/login",userLogin);
router.post("/current",validation,user);
module.exports=router;