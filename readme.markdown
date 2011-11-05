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

The end result is an HTML page which is rendered by the app. Therefore
the markdown can also contain HTML and JavaScript code.

***How to write a page***
===============
To create a demo, create text file with the extension .js.
A demo file is a valid JavaScript file than contains comments with 
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

You can also include C# or JavaScript files, need to execute the 
programs but that you do not want to show

```javascript
//code C#   has reflection vs JavaScript Is reflection
/**
- Let's output the properies of an instance
**/
//#include person.js
//#include person.cs
var p = { LastName : "Torres", FirstName : "Frederic" };

for(var propertyName in p){

    print(propertyName + " = " + p[propertyName]);
}
//C#
public class Program {

    static void Main(){

        var p = new { LastName = "Torres", FirstName = "Frederic" };

        foreach(var propertyInfo in p.GetType().GetProperties()){

            Console.WriteLine(propertyInfo.Name + " = " + propertyInfo.GetValue(p, null).ToString());
        }
    }
}
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

JavaScriptDemoer uses the following

- nodejs 0.5.10 windows version
- jQuery.1.6.4.js
- SyntaxHighlighter 3.0.83
    - http://alexgorbatchev.com/SyntaxHighlighter
- markdownsharp
    - http://code.google.com/p/markdownsharp/
    

***License***
===============
The MIT License (MIT)
Copyright (c) 2011 TORRES Frederic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.