JavaScriptDemoer
================

***Overview***
===============

JavaScriptDemoer is a windows application to demo JavaScript and/or C# source code live.
Each page displays:

- a slide written with the MARKDOWN language
- An optional C# program, that must compile and may produce a console output.
    - .NET 4.0 must be installed.
- A JavaScript program that must  compile and may produce a console output.
    - JavaScriptDemoer comes with nodejs 0.5.10 windows version

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

***Keyboards Shortcuts***
===============

- F12 Next Page
- F11 Previous Page

- CTRL+F12 Hide the program execution panel
- CTRL+F11 Hide the slide panel

- F7 Generate an HTML summary of the presentation
- CTRL+F7 Generate presentation as an HTML file
    - The file is created in the sub folder node



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