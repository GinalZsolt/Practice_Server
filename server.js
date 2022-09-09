const express = require('express'), path = require('path'),app= express();

app.listen(3000)
app.use('/css',express.static(path.join(__dirname,'./css')))
app.use('/img',express.static(path.join(__dirname,'./img')))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/me.html'))
})

app.get('/hobbies', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/hobby.html'))
})

app.get('/contacts', (req,res)=>{
    res.sendFile(path.join(__dirname,'./html/contacts.html'))
})

app.post('/uzenet', (req,res)=>{
    console.log(req.body)
    res.send('Kész!')
})