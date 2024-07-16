const express= require("express");
const cors=require("cors")
const app= express();
const PORT=3000

app.use(cors())

app.get('/',(req,res)=>{
    res.send({"message":"test connected"})
})
app.get('/login',async(req,res)={

})
app.post('/signup',async(req,res)={

})
app.post('/update',async(req,res)={

})


app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})