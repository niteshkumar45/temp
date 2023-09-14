const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("thsi is home page")
})

app.listen(3200)