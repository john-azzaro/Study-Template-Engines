# Template Engines Study

<br>

## What is a template engine?
A *template engine* allows you to replace variables in your files with acutal values, and then send the resulting HTML string to the clinet.  Express apps are capable of handling server-side template engines whihc can add data to a *view* and generate that HTML dynamically.

<br>

## What template engines are available for Node.js?
There are wide range of templating engines for Node.js. More templating engines will be added, but here are the few covered in this study:

* [Pug](#Pug)
* [EJS](#EJS) *(Coming soon)*

<br>

<dl>

## Pug

<dd>

### What is Pug?
-----------------

**Pug** is a clean, white space/indentation sensitive syntax for writing HTML for Node.js. Pug allows you to write dynamic and reusable HTML documents. Pug is a *preprocessor*, so you can use it to wrap repetitive code for mulitple uses (e.g. extending base templates, etc).

With Pug, you can cut down the amount of code your write compared to vanilla HTML (and even other template engines like EJS).  Additionally, Pug features conditions, loops, etc and supports JavaScript natively to format HTML code. 

Pug is also written in a paragraphical style (see example below) which can help improve readability in your code. For instance, a tag name would be the first thing in line and everything else that follows is just the content inside it, which essentially means you dont need to completely wrap elements in tags. 

For example, heres a paragraph element in both HTML and Pug for comparison. 

An HTML document that looks like this:
```html
    <!DOCTYPE html>  
    <html lang="en">  
        <head>
            <title>Cakes of the world</title>
        </head>
        <body>
            <h1>Cakes in Sweden</h1>
            <div class="container">
            <p>Cakes from Sweden are amazing!</p>
            </div>
        </body>
    </html>
```
Would translate to this in Pug:
```pug
    doctype html  
    html(lang='en')  
        head
            title Cakes of the world
        body
            h1 Cakes in Sweden
            div.container
                p Cakes from Sweden are amazing!
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
    app.set('view engine', 'pug');                         // use pug as the template engine.  
    app.set('views', path.join(__dirname, 'views'));       // tell pug where the template files will be.
```

**STEP 3: Create a "views" folder to hold your pug files**

This folder will hold all of your static ```.pug``` files.
```
    views
```

**STEP 4: Create a ```.pug``` for your view**

To create a view using pug, you simply need to create a file inside your view folder with the ``` .pug``` file type.
```pug
    h1 How Using Pug Saved My Sanity
        p This is a paragraph that was carefully tab formatted otherwise would result in errors.
```

**STEP 5: Extend a base template**

Suppose you are creating multiple pages and you have an element that you want to use on all your pages.  You could repeat the same lines of code over again, but pug allows you to have a seperate Pug document and *extend* it to the document you want to use it on.  Pug supports *template inheritance* with works with *extends* and *block*.  In a template, a **block** is just a peice of code that the child template will replace. **Extends** simply links the module to the file you wish to import code from.

</dd>

<br>

### What is EJS?
**EJS** or *Embedded JavaScript Templating* is a templating engine used by Node. EJS hels create HTML templates with minimal coding and can also inject data into HTML at the client side to produce the final HTML result and also helps embed JavaScript into HTML pages.

Note that in most ways, installing and using EJS is much the same as installing and running Pug, so the information may overlap.

<br>

### How do you use EJS?
---------------------------
**STEP 1: Load the EJS npm package**

To do this, you need to do an npm install of the EJS library in your project folder.
```
    npm install ejs
```

**STEP 2: Setup the EJS view engine in server.js**
First, we tell express to use EJS as the view engine, and then tell EJS where the files will be.
```JavaScript
    app.set('view engine', 'ejs');                         // use EJS as the template engine.  
    app.set('views', path.join(__dirname, 'views'));       // tell EJS where the template files will be.
```

**STEP 3: Create a views folder for your EJS files**