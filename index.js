const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/index', (req,res)=>{
   res.sendFile(__dirname + '/index.html') 
})
app.get('/', (req,res)=>{
    res.render('index')
 })
app.get('/about', (req,res)=>{ 
    res.render('about') 
})
app.get('/user/:username', (req,res)=>{
    let data = {username : req.params.username , hobbies:['рисунки',"ігри"]}
    res.render('user', data) 
})

const PORT = 3000

app.listen(3000, ()=>{
    console.log(`Сервер працює http://localhost:${PORT}`)
})