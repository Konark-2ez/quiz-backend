const express = require('express');
const quizRouter = express.Router();
const {quizModel} = require("../model/quiz.model")

quizRouter.post("/create",async(req,res)=>{
    try {
        const quiz = new quizModel(req.body)
        await quiz.save()
        res.status(200).send({"msg":"quiz successfuly created"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

quizRouter.get("/get",async(req,res)=>{
    try {
        const quiz = await quizModel.find()
        res.status(200).send(quiz)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
quizRouter.get("/get/:id",async(req,res)=>{

    try {
        const quiz = await quizModel.findOne({_id:req.params.id})
        res.status(200).send(quiz)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {quizRouter}