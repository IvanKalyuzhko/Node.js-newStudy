const os = require('os') // підключаєм модуль 
// щоб отримати певні дані звертаємось до модюлю os та через крапку звертаємось до однієї із можливих функцій 
let res = os.platform()//звернення до модулю краще помістити у змінну (let res)
console.log(res)// виводим на екран у терміналі

//тут ми імпортуєм модуль my_math
const my_math = require('./my_math') //у дужках вказуєм саме повний шлях до модулю my_math
let res1 = my_math.add(4,5)
let res2 = my_math.minus(4,5)
console.log(`Res1:${res1},Res2:${res2}`)