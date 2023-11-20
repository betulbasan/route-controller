const express = require('express');
const routes = require('./routes/tea'); // import the routes

const app = express();

app.use(express.json()); // parse incoming json data from http requests, a standard format for data transmission in web server

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('your app is listening on port ' + listener.address().port)
})
// process.env.PORT meanning, listen which port is avaliable or listen 3000 port