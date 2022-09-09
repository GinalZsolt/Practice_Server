const express = require('express'), path = require('path'),app= express();

app.listen(3000)

app.use('body-parse')

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/me'))
})

app.get('/hobbies', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/me'))
})

app.get('/contacts', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/me'))
})