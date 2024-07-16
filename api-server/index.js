const express= require("express");
const cors=require("cors")
const app= express();
require('dotenv').config()
const PORT=process.env.PORT
const DBurl=process.env.DB

//middleware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({"message":"test connected"})
})
app.get('/login', async(req,res)=>{
    res.send({"message":"login request"})
})
app.post('/signup',async(req,res)=>{
    res.send({message:"post request"})
})
app.post('/update',async(req,res)=>{

})


app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})