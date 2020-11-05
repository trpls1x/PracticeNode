const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    routes = require('./routes.js'),
    mongoose = require('mongoose'),
    User = require('./models/UserModel')

mongoose.connect('mongodb://localhost/db_users')

routes(app);
app.listen(port)