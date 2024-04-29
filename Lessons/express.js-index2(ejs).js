const express = require('express')

const app = express()

//тут вказуєм що ми використовуєм шаблонізатор ejs
//set - за цим модулем ми можем встановлювати різні модулі до програми 
app.set('view engine', 'ejs')// першим значенням вказуєм назву настройки (двигун для показу всих шаблонів) , другим саму настройку (ejs)
//шаблонізатор буде шукати папку view в якій мають бути файли із розширенням ejs

app.get('/', (req,res)=>{
   //sendFile - ця функція буде відображати index.html файл на сторінці цього url
   res.sendFile(__dirname + '/index.html') //в дужках вказуєм повний шлях до папки за допомогою __dirname 
})

// тут за допомогою ШАБЛОНІЗАТОРА ejs створюєм сторінки
app.get('/index', (req,res)=>{
    // для роботи шаблонізатора ставим render
    res.render('index')//повний шлях не прописуєм ,а тільки вставляєм назву файлу шаблонізатора який будем відображати користувачу(без розширання цього файлу)
 })
app.get('/about', (req,res)=>{ 
    res.render('about') 
})
app.get('/user/:username', (req,res)=>{
    // тут використовуєм змінну для додавання інформації у шаблон
    //тут будем використовувати властивість username та в значення передаватимем те що отримали із username (тобто ми будем отримувати на сторінці імя користувача яке і будем прописувати в url)
    let data = {username : req.params.username , hobbies:['рисунки',"ігри"]}//через кому пропишем властивість hobbies яку будем передавати до конкретного користувача (користувача прописуєм у файлі user.ejs)
    res.render('user', data) // щоб передавати інформацію у шаблон - використовуєм другий параметер (обєкт)
})

const PORT = 3000

app.listen(3000, ()=>{
    console.log(`Сервер працює http://localhost:${PORT}`)
})