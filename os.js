const os = require('os')

console.log(os.totalmem()) //кількість оперативки в байтах
console.log(os.release()) //версія операційної системи
console.log(os.platform()) //на якій платформі зараз працює
console.log(os.homedir()) //коренева папка користувача
console.log(os.userInfo()) //інформація про користувача