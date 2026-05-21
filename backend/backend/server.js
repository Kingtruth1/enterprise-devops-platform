require("dotenv").config()

const express=require("express")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.json({
status:"healthy",
message:"Enterprise DevOps API"
})
})

app.get("/health",(req,res)=>{
res.status(200).json({
health:"OK"
})
})

const PORT=process.env.PORT || 3001

app.listen(PORT,()=>{
console.log(`API running on ${PORT}`)
})