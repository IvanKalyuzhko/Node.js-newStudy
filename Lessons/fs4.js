const fs = require('fs')

//тут вказуєм функцію за якою будем видаляти папку із файлом 
fs.unlink('text-files/some.txt', ()=> { // цією функцією видаляєм саме файл із створеної пакпки 
    //неможливо видалити папку якщо ми не видалили файли що знаходяться у ній
    fs.rmdir('text-files',()=>{}) // цією функцією видаляєм саме папку 
})