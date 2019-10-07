const express = require('express');                 // load express module

const app = express();                              // initialize app by calling express and storing as "app"

app.get('/', function(req, res) {
    res.send('Hello there fellow human')
})

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on ${process.env.PORT || 3000}...`);        // listen for client requests 
})