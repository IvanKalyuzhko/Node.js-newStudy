const fs = require('fs')

// тут створюєм папку під назвою text-files
fs.mkdir('text-files',() =>{ // callback-ом вказуєм на функцію що буде спрацьовувати після виконання цієї функції
    fs.writeFile('./text-files/some.txt','Hello',()=>{}) //тут вказуєм на створення файлу у папці (вказуєм шлях та який запис буде міститись у файлі)
} )

