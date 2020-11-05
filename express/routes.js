User = require('./models/UserModel')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send("<a href='/students'>Proceed to students</a>")
    })
    
    app.get('/students', (req, res) => {
        User.find((err,users) => {
            if(err)
                res.send(err);

            res.json(users);
        })
    })
}