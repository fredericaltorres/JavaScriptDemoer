JavaScriptDemoer
================

***Overview***
===============

JavaScriptDemoer is a windows application to demo JavaScript and/or C# code live.
Each page displays

- a slide written with the MARKDOWN language
- An optional C# program, that must compile and may produce a console output.
    - .NET 4.0 must be installed.
- A JavaScript program that must  compile and may produce a console output.
    - JavaScriptDemoer comes with nodejs 0.5.10 windows version

![](http://github.com/fredericaltorres/JavaScriptDemoer/blob/master/JavaScriptDemoer.jpg)

***How to write a pages***
===============
To create a demo, create text file with the extension .js.
A demo file is a valid JavaScript file than contains comment with 
special meaning.

- Syntax:

```javascript
//code Slide-Title
/**
Markdown-Code
**/
JavaScript Code	
//C#
CSharp-Code
```

- Sample:

```javascript
//code The Shortest Object Oriented Program In The World
/**
- Anonymous Type vs Object Literal
**/
	var p = { LastName : "Torres" };
    print(p.LastName);
//C#
	var p = new { LastName = "Torres" };
    Console.WriteLine(p.LastName);
```

***Credits and libraries***
===============

JavaScriptDemoer use the following

- nodejs 0.5.10 windows version
- jQuery.1.6.4.js
- SyntaxHighlighter 3.0.83
    - http://alexgorbatchev.com/SyntaxHighlighter
- markdownsharp
    - http://code.google.com/p/markdownsharp/

TORRES Frederic 2011