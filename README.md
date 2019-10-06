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

### Pug
-------
<dd>

#### What is Pug?

**Pug** is a HTML templating engine for Node.js which we can use to add data to a view and generate HTML dynamically. 

Pug takes the tag name as the first thing in a line and the rest is just the content inside it, which essentially means you dont need to completely wrap elements in tags.  With Pug, you can cut down the amount of code your write compared to vanilla HTML and even other template engines like EJS.  Pug is also written in a paragraphical style (see example above) which can help improve readability in your code.
```pug
    p Hello ther fellow pug user!
```
However, there are a few drawbacks to the Pug templating engine.  

First, you need to very careful with whitespace, as an extra space can mess up the rest of your code.  

Second, any HTML that you wish to bring into your pug file needs to be converted for use in a .pug file.  

Note that Pug was orginally called Jade, but due to copyright issues, it was changed to Pug around 2016. This is important to keep this in mind because when you install Express, Jade will be installed by default for backward compatibility reasons.

#### How do you use Pug?
To use Pug, you




</dd>



<br>

### EJS
-------
<dd>

**EJS** is a HTML templating engine for Node.js

</dd>





</dl>



<br>

