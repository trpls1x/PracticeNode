const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000

const routes = require('./routes.js');

routes(app);

app.listen(port)