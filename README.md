# Template Engines Study

<br>

Here's some questions covered in the study:

* [What is a Template Engines?](#)

<br>

## What is a Template Engines?
A *template engine* allows you to replace variables in your files with acutal values, and then send the resulting HTML string to the clinet.  Express apps are capable of handling server-side template engines whihc can add data to a *view* and generate that HTML dynamically.

<br>

## What template engines are available for JavaScript?

<dl>

## Pug

<dd>

### What is Pug?
-----------------

**Pug** is a HTML templating engine for Node.js which essentially means you can write much simpler Pug code and the Pug compiler will compile that into HTML code that the browser can understand.

With Pug, you can cut down the amount of code your write compared to vanilla HTML and even other template engines like EJS.  Pug features conditions, loops, etc and supports JavaScript natively to format HTML code. 

Pug is also written in a paragraphical style (see example above) which can help improve readability in your code. For instance, the tag name is the first thing in a line and the rest is just the content inside it, which essentially means you dont need to completely wrap elements in tags. For example, heres a paragraph element in both HTML and Pug for comparison. 
```html
    <p>Hello there fellow pug user!</p>                        <!--HTML-->
```
```pug
    p Hello there fellow pug user!                             <!--Pug--> 
```
However, there are a few drawbacks to the Pug templating engine.  

First, you need to very careful with whitespace, as an extra space can mess up the rest of your code. Second, any HTML that you wish to bring into your pug file needs to be converted for use in a .pug file.  

It is important to note that Pug was orginally called Jade, but due to copyright issues, it was changed to Pug around 2016. This is important to keep in mind because when you install Express, Jade will be installed by default for backward compatibility reasons.

<br>

### How do you use Pug?
--------------------------
**STEP 1: Load the Pug npm package**
To do this, you can install the npm package to your package.json file.
```
    npm install pug
```

**STEP 2: Setup the Pug view engine in server.js**
First, we need to tell express to use Pug as the templating engine.
Second, we need to tell pug where the template files will be, passing in the location as the first parameter and the second parameter the directory.
```JavaScript
    app.set('view engine', 'pug');                         // use pug as the template engine...                   
    app.set('views', path.join(__dirname, 'views'));       // tell pug where the template files will be.                
```

**STEP 3: Create a "views" folder to hold your pug files**
This folder will hold all of your static ```.pug``` files.
```
    views
```




</dd>



<br>

### EJS
-------
<dd>

**EJS** is a HTML templating engine for Node.js

</dd>





</dl>



<br>

