const express = require('express');                                                // load express module
const path = require('path');                                                      // load path module for static html files demo

const app = express();                                                             // initialize app by calling express and storing as "app"

app.set('views', path.join(__dirname, 'views'));                                   // This tells pug where the template files will be. 
app.set('view engine', 'pug')                                                      // this tells express to use the pug view "templating" engine

app.get('/', function(req, res) {                                                  // for home route, render the index.pug file.
    res.render('index');
});

// app.use(express.static(path.join(__dirname + '/public')));                      // This will allow static pages from the public folder (for reference compared to pug)

// app.get('/', function(req, res) {                                               // Tester route for server.
//     res.send('Hello there fellow human')
// })

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on ${process.env.PORT || 3000}...`);        // listen for client requests 
})