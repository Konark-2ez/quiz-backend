const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
    "quizCreator":String,
    "title":String,
    "description":String,
    "questions":[{
        "title":String,
        "answer":Array,
        "correct":String,
    }]
    
})

const quizModel = mongoose.model("quiz",quizSchema)
module.exports = {quizModel}