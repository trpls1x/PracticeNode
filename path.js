const path = require('path')

console.log(__filename)

console.log(path.basename(__filename)) //повний шлях до файлу
console.log(path.dirname(__filename)) //шлях до папки в якій знаходиться файл
console.log(path.extname(__filename)) //тип файлу

console.log(path.parse(__filename)) //повна інформація про файл

console.log(path.join(__dirname, 'test', 'second.html')) //додає в папку файлу папку тест і створює в ній файл second.html