require("dotenv").config()

const express=require("express")
const cors=require("cors")
const pool=require("./db")

const app=express()

app.use(cors())

app.get("/api",async(req,res)=>{

try{

const result=await pool.query(
"SELECT NOW()"
)

res.json({

status:"healthy",

database:"connected",

time:result.rows[0]

})

}

catch(error){

res.status(500).json({

status:"failed",

error:error.message

})

}

})

app.listen(
process.env.PORT,
()=>console.log(
`API running on ${process.env.PORT}`
)
)
