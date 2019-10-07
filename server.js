const express = require('express');                                                // load express module
const path = require('path');                                                      // load path module for static html files demo

const app = express();                                                             // initialize app by calling express and storing as "app"

app.set('views', path.join(__dirname, 'views'));                                   // This tells pug where the template files will be. (note: "set" means set this on all requests) 
app.set('view engine', 'pug')                                                      // this tells express to use the pug view "templating" engine.

// app.use(express.static(path.join(__dirname + '/public')));                      // USE WITH STATIC PAGES: This will allow static pages from the public folder (note: "use" means use this )

app.get('/', function(req, res) {                                                  // for home route, render the index.pug file.
    res.render('index');
});

// app.get('/', function(req, res) {                                               // USE FOR INITAL CONNECTION TEST: Test route for server.
//     res.send('Hello there fellow human')
// })

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on ${process.env.PORT || 3000}...`);        // listen for client requests 
})