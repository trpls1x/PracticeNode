const users = [
    {name: "Sasha", age: 18},
    {name: "Masha", age: 18}
]

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send("<a href='/students'>Proceed to students</a>")
    })
    
    app.get('/students', (req, res) => {
        res.json(users)
    })
}