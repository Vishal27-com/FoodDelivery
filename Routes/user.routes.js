const express=require("express");
const { registration, login, resetPassword } = require("../Controller/user.controller");
const userRouter=express.Router();
// to create a new user's account
userRouter.post('/register',registration)
// to login existing user
userRouter.post('/login',login)
// to reset password
userRouter.patch('/user/:id/reset',resetPassword)

module.exports=userRouter