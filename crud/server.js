const express = require('express');

const app = express();

app.listen(4500,()=>{
    console.log("server started")
})

app.get('/',(req,res)=>{
    res.send("hello recived get request")
})

app.get('/u',(req,res) => {
    if(req.query.city){
        res.send(`hello welcome to ${req.query.city}`)
    }
    else{
        res.send("hello")
    }
})

app.get('/xyz/:city',function(req,res) {
    if(req.params.city){
        res.send(`hello welcome to ${req.params.city}`)
    }
     
})