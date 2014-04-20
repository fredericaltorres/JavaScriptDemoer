//code 
/**
<center>
# Why Learn JavaScript in 2014?
<br/>
![](../javascript-rhino.jpg)

##Frederic Torres
</center>

**/

//code Why Learn JavaScript in 2014?
/**
About the Audience? 

* One Important Question

<br/>    


**/
//code Why Learn JavaScript in 2014?
/**
About the Audience?
<br/>
<center>
<h1>Who hate JavaScript?</h1>
</center>
<br/>
<center>![](../javascript_the_evil_parts_small.png)</center>

**/

//code Why Learn JavaScript in 2014?
/**
About the Audience?

<center>
<br/>
<center>
<h1>Who hate JavaScript?

Who do not understand JavaScript?

**/

//code Why Learn JavaScript in 2014?
/**
About the Audience?

<br/>
<center>
<h1>Who hate JavaScript?

Who do not understand JavaScript?

Who ever read a book about JavaScript the language?
**/

//code Very short history - The bad part
/**
* ***JavaScript*** created in 1995 (almost 20 years ago)

    * Bredan Eich as part of the Netscape Web Browser (*Legend says in 2 weeks*)

<center>![](../BredanEich.jpg)</center>

* It was adopted by million of Web users ***very quickly*** and **because**:<br/>

    * It was created for beginner
    * Compatibilty reason
    * Browser wars between Sun, Netscape, Microsoft
    * Designed by Committee (TC39, ECMAScript)
**/
//code Very short history - The bad part
/**
* The language contains some ***dangerous*** and ***stupid*** features, that were not fixed and will not be fixed

* It also contains some of most brillant features like ***First class function*** and ***Closure***

**/
//code  Very short history - The good part
/**

* ***But*** JavaScript is not as bad as it looks

* it is also ***misundertsood***

    * It looks like Java or C#, but is closer to LISP
    
    <pre>
        (defun factorial (N)
            (if (= N 1)
                1
            (* N (factorial (- N 1)))))
</pre>            

    * Developers say they hate JavaScript, *but what they really hate is the DOM*

    * Developers think they know JavaScript without ever having read a book about it
        * That was my case until 2011

**/

//code  Very short history - The good part
/**

<br/><center>
# JavaScript is a Dynamic,
#Object-Oriented,
# Functional
#Programming Language
</center> 
**/

//code  JavaScript History
/**
If you want to know more about the history of JavaScript

* JavaScript the world's most misundertsood programming language by ***Douglas Crockford*** (40 minutes)

    * <a href="http://www.youtube.com/watch?v=gz7KL7ZirZc&index=8&list=PL6CD00715087803AD">http://www.youtube.com/watch?v=gz7KL7ZirZc&index=8&list=PL6CD00715087803AD</a>

<center>
![](../DouglasCrockford.jpg) 
![](../JavaScriptTheGoodParts.jpg)
</center> 

***Douglas Crockford*** is one of the most famous JavaScript evangelist.

* JSON Discoverer/Creator   
* JSLint: Code Quality Tool
* Behind YUI Library (Yahoo)


**/

//code Why learn JavaScript 2014?
/**
* It is not just for the Web anymore

* Can be extremely fast 

* Since 2008 a lot of new tools and technologies have been created that use JavaScript

**/
//code Why learn JavaScript 2014?
/**
* If all you know is statically compiled programming languages like

    * C, Pascal, C++, Java, C#, VB<br/><br/>

* Try the world of Dynamic Languages:

    * Python, Ruby and JavaScript<br/><br/>

<center>
## By learning how to program with such languages 
## you will become a better C# programmer
</center>

* Let's review what happens since 2008


**/
//code In 2008
/**
* What happened in 2008 ?


**/
//code In 2008
/**
* In 2008, **V8** . . . 


**/
//code In 2008 - V8
/**
* In 2008 Google released the Chrome browser

* The Chrome browser use the JavaScript engine called ***V8***
    * The first JavaScript engine use **Just In Time Compilation**<br/><br/>


* By 2014 all major browsers (FireFox (Ion Monkey), IE9 (Chakra), Safari) have some form of very fast JavaScript engine using JIT and other specific technologies.

**/
//code 2010 - CoffeeScript
/**
<center>![](../CoffeeScript.png)</center>

* In December 2010, Jeremy Ashkenas, released CoffeeScript 1.0 compiler

* CoffeeScript is a programming language that **transcompiles** to JavaScript

* The language is inspired by Ruby and Python to enhance JavaScript's brevity and readability and adding additional features

* We have more and more language that transcompiles to javaScript:

    * Dart
    * Google Web Toolkit (Java -> JavaScript)
    * ClojureScript
    
**/
//code 2010 - NodeJS
/**    
<center>
![](../300px-Node.js_logo.svg.png)
</center>

* Node.js is a software platform for scalable server-side and networking applications.

    * It use JavaScript
        * Use Google JavaScript engine V8 (extremely fast)
    * Avaiable on Linux, Windows, MacOS X.
        * Non-blocking I/O (Asynchrounous programming), Single-threaded<br/><br/>

* Ryan Dahl, released NodeJs 2010/2011
    
* Extremely successfull

* Microsoft has invested on NodeJS for Windows, Azur and Visual Studio

**/
//code 2012 - TypeScript
/**
<center>
![alt text](../TypeScript.png)
</center>

* In 2012, Microsoft release TypeScript which add Types to JavaScript.

* What is interresting with TypeScript is the way it add Types
    * Optional
    * Light
        * Not used at runtime
        * Only used at edit time
            * Catch error
            * Intellisense
            * Refactoring tool

**/
//code NoSQL Databases
/**
* ***MongoDB*** (use the Firefox JavaScript Engine, C++) <br/>
![](../MongoDB.jpg)

* ***RavenDB*** (use the JavaScript engine Jint v 0.9 C# and should used Jint v 2.0 (contributor))<br/>
![](../ravendb.png)

* ***Azure Mobile Service***<br/>
![](../MobileServices.jpg)

    * Allow to customize the data getting in and out using JavaScript (NodeJS)

**/
//code HTML5 + Mobile + PhoneGap
/**
![](../PhoneGap.jpg) is a mobile development framework that enables software programmers to build applications for ***mobile devices*** using JavaScript, HTML5, and CSS3.
<br/>


* PhoneGap Build http://phonegap.com

    * iOS, Android, Windows Phone, Black berry and other    s

    * Combined with library like jQuery Mobile, Sencha, Kendo UI.

* Telerik AppBuilder http://www.telerik.com/appbuilder


**/
//code ASM.js
/**
What is it ? <br/>
![](../asm.js.jpg)

* ASM (Assembler Source Language)

* Asm.js is a strict subset of JavaScript that can be used as a low-level, efficient target language for compilers.

    * Asm.js transforms a JavaScript runtime into a Virtual Machine like JVM or .NET Runtime <br/><br/>

* C++ source --> Compile to LLVM --> Translate to ASM.js --> Fast execution in FireFox

* But why? To execute game written in C++ in the browser with minimal rewriting.
 
**/

//code The books to read
/**
------------------------------------------------------------------------------

![JavaScript The Definitive Guide](http://ecx.images-amazon.com/images/I/51CxDZt9xWL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg "")
JavaScript The Definitive Guide

![JavaScript: The Good Parts: The Good Parts](http://ecx.images-amazon.com/images/I/511j6cza5bL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg "")
JavaScript: The Good Parts: The Good Parts

**/

//code Let's look at some code
/**


**/
