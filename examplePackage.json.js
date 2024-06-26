// Як cтворити Node.js

// скачати бібліотеку Node.js (та що LTS версія) та встановити на пк (разом із установкою скачується пакетний менеджер npm !!!)
// прописуєм у терміналі npm init для ініціалізації проекту 

// після чого у терміналі зявиться ось така структура із питаннями на які потрібно надати відповідь 
// {
//     "name": "node.js-newstudy",                             - яка назва проекту (назва головної папки проекту)
//     "version": "1.0.0",                                     - яка версія проекту 
//     "description": "",                                      - який додатковий опис проекту 
//     "main": "index.js",                                     - який файл js буде основним у проекті (пропонує index.js)
//     "scripts": {                                            - тут буде пропонуватись додати деякі тестові команди (за замовчуванням буде доданий ось такий шаблон)
//     "test": "echo \"Error: no test specified\" && exit 1"   - далі пропонуватиме додати гіт репозиторій (нічого не прописував)
//      },                                                     - далі пропонуватиме додати ключові слова (нічого не прописував)
//     "author": "Kalyvan",                                    - який буде автор 
//     "license": "ISC"                                        - ліцензія для проекту (потрібно ставити ліцензію у випадку комерційного проекту )
//   }
// після цих всих питань буде створений package.json обєкт із цією інформацією

// у властивості "scripts" ми можем зберігати різні скрипти які ми зможем запускати через пакетний менеджер npm 
//(при запуску "scripts" автоматично буде запускатись код який прописаний у значенні (в даному випадку - {"test": "echo \"Error: no test specified\" && exit 1"}))

// надалі сюди будуть додаватись додаткові бібліотеки які ми будем додавати у проект
// При першій загрузкі якоїсь бібліотеки (вводим у термінал npm i та назву бібліотеки) у проекті зявиться ще дві папки (package-lock.json та node_modules)

//package-lock.json - це той же файл що і package.json , але різниця в тому що package-lock.json показує більш повний опис цього проекту (цей файл більш програмний файл )

// для ВИДАЛЕННЯ бібліотеки використовуєм команду npm uninstall та вводим назву бібліотеки

// щоб бібліотека працювала на проекті необхідно встановити її глобально (бібліотека встановиться на пк , а не в проект(локально))
//для ГЛОБАЛЬНОГО ВИДАЛЕННЯ бібліотеки (видалити його повністю із ПК) використовуєм команду npm uninstall -g та вводим назву бібліотеки


// У обєкті "dependencies" який знаходиться у package.json записуються всі залежності (всі бібліотеки що скачувались у проект) - за рахунок нього ми можем бистро встановити всі бібліотеки які мають бути у проекті 
//Для того щоб скинути проект не великим обсягом необхідно видалити папку node_modules та package-lock.json і скинути всі файли що залишились 
//Для того щоб відновити папку node_modules та package-lock.json необхідно у терміналі прописати npm i 