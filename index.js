const express = require('express');
const connect = require('./connection');
const student = require('./routes/student')
const app = express()
const Port = 3000

connect();
app.use(express.json())
app.use(student)









app.listen(Port,(err)=>{
    if(err){
        console.log("server is busy",err)
    }else{
        console.log("server is running on ",Port)
    }
})