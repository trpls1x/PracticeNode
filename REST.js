const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end("<a href='/users'>Proceed to students</a>")
    }
    else if(req.url == '/users') {
        res.writeHead(200, {
            'Content-type' : 'text/json'
        })
        const users = [
            {name: "Sasha", age: 18},
            {name: "Masha", age: 18}
        ]
        res.end(JSON.stringify(users));
    }
    else {
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end("<h1>404 Page not found :(</h1><br><a href='/'>Home</a>")
    } 
})

server.listen(3000, () => {
    console.log('Server running...')
})