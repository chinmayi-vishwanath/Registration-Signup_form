
import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose';


const app=express();
app.use(cors())
app.use(express.json())




mongoose.connect('mongodb://127.0.0.1:27017/frontbackend')

const scheme=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    password:{
        type:Number,

    }
     
})

const collection = mongoose.model('collections1',scheme)








app.post('/api/user',async(req,res)=>{
    const front=req.body
    console.log(front)
    if(!front||!front.username||!front.password){
        res.send({badrequest:"400"})
    }
    res.send({res:req.front})

    const creatreq=await collection.create({
        username:front.username,
        password:front.password,

})





})

app.listen(5000,(req,res)=>{
    console.log("sucessfully running")
})


