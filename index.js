const express = require("express");
const {connection} =  require("./config/db")
const {userRouter} = require("./routes/user.route")
const {quizRouter} = require("./routes/quiz.route")
require("dotenv").config()
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Quiz app")
})

app.use("/user",userRouter)
app.use("/quiz",quizRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Connection established in ${process.env.PORT}`)
})
