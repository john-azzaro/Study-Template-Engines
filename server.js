const express = require('express');                 // load express module
const path = require('path');                       // load path module for static html files demo

const app = express();                              // initialize app by calling express and storing as "app"

app.use(express.static(path.join(__dirname + '/public')));      // This will allow static pages from the public folder (for reference)

// app.get('/', function(req, res) {
//     res.send('Hello there fellow human')
// })

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on ${process.env.PORT || 3000}...`);        // listen for client requests 
})