const express = require('express');
const userRouter = express.Router();
const {userModel} = require("../model/user.model")
userRouter.post("/register",async(req,res)=>{
    const {username,email} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            res.status(400).send({"msg":"User already registered"})
        }
        else{
            const user = new userModel({username,email})
            await user.save()
            res.status(200).send({"msg":"User successfuly registered"})
        }
    } catch (error) {
        res.status(401).send({"msg":error.message})
    }
})

module.exports = {userRouter}