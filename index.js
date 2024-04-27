const http = require('http')
const fs = require('fs') // підключаєм fs для роботи з файлами та папками

let server = http.createServer((req,res)=>{ 
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})

    //потрібно зчитувати файл в потоках даних тож користуємось createReadStream
    //createReadStream - зчитує інформацію по кусочкам і отправляє по кусочкам інформацію на сервер (користувач одразу буде бачити інформацію на сторінці)
    
    //щоб відслідковувати одразу декілька url адресів можна зробити умову в якій будем звертатись до req
    //та через цей параметр звертаємось до значення url і вказуєм наш адрес (url =='/')
    if(req.url =='/') 
        // тут ми вказуєм потрібний шлях до файлу 
        fs.createReadStream('./templates/index.html').pipe(res)//pipe бере ті кусочки інформації що вже зчитались і одразу відправляє на сервер(одразу показує користувачу)
    else if (req.url == '/about')
        // тут ми вказуєм потрібний шлях до файлу 
        fs.createReadStream('./templates/about.html').pipe(res)//pipe бере ті кусочки інформації що вже зчитались і одразу відправляє на сервер(одразу показує користувачу)
    else //тут вказуєм любий інший url адрес
        // тут ми вказуєм потрібний шлях до файлу 
        fs.createReadStream('./templates/error.html').pipe(res)//pipe бере ті кусочки інформації що вже зчитались і одразу відправляє на сервер(одразу показує користувачу)
})


const PORT = 3000 
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{ 
    console.log(`Сервер працює http://${HOST}:${PORT}`) 
})
