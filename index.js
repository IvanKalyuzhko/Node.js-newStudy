const http = require('http')

let server = http.createServer((req,res)=>{ 
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    res.end('Hello <button>Кнопка</button>') 
})

const PORT = 3000 
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{ 
    console.log(`Сервер працює http://${HOST}:${PORT}`) 
})
