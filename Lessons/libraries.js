const CC = require('currency-converter-lt') // підключаєм бібліотеку
let currencyConverter = new CC({from:"USD", to:"EUR", amount:100}) // тут створюєм обєкт на основі класу (верхнього) та у дужках вказуєм додаткові параметри ({from:"USD", to:"EUR", amount:100})

//в документації до бібліотеки (на сайті npm) ми можем найти повністю весь код до отримання результату від бібліотеки
currencyConverter.convert().then((response) => { // тут звертаємось до обєкту та до методу convert 
    console.log(`Result: ${response}`) // виводим результат 
})