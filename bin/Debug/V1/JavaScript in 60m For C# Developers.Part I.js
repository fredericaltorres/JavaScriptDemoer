//code .
/**

<center>

<H1>JavaScript in 60 minutes for C# developers

<BR /><BR /><BR />

Part I

<BR /><BR /><BR />

Frederic Torres 2011
</H1>

</center>

**/

//code Who Am I?
/**
First Name: Frederic

Last Name:  Torres

Web Site:   http://www.FredericTorres.net

            You can find this presentation on my web site

State:      Massachusett

<HR />

- MS-DOS 2.0

- Day C# ~ Night JavaScript

- Code Camps and other ~ Python, JavaScript and C#.

- I am currently focusing on
     - developing HTML5 app with [jQuery Mobile](http://frederictorres.net/iphone.asp?app=1) targeting iOS and Android devices
**/
//code Disclaimers
/**
- Not a JavaScript Guru

- My implementations, with out of the box JavaScript

**/

//code What is this presentation about and not about?
/**

- It is about JavaScript's possibilties, you probably do not know.

    - C# features as my starting point.<BR><BR>
    

- This is not an introduction to JavaScript

**/

//code About The Audience
/**
- How many of you hate JavaScript?

- How many of you really like JavaScript?
**/

//code Top 6 Reasons To Learn JavaScript In 2011

//code Reason 6 - Because Nobody Does
/**

- I never really learnt JavaScript, until 2010.

- [The World's Most Misunderstood Programming Language by Douglas Crockford](http://javascript.crockford.com/javascript.html)

![](../JavaScriptDefinitveGuide.jpg) ![](../JavaScriptTheGoodParts.jpg)
**/






//code Reason 5 - JavaScript is like VISA: Accepted Everywhere
/**
![](../Visacard.jpg)

- All Platforms: .NET, LAMP, Java, Rail

- All OS: Windows, Linux, Mac OS, Others

- All companies

- All browsers (including phones and tablets)
    
***No religion war - Every body does it.***
**/

//code Reason 4 - JavaScript is the programming language of the web.
/**
![html5.jpg](../html5.jpg)

- Laptop/Desktop (IE9/IE10, Chrome10, FireFox4, Safari5, Operaxx)

- Phones, Tablets, NetBooks

- HTML5+JavaScript is/was big on a WebOS,

- Windows 8 Applications [What's coming from BUILD]

**/

//code Reason 3 - JavaScript now run on the Server
/**
- NodeJs: Build scalable network application, without multi-threading
    - web app, web service, irc server, pop server<BR /><BR />

- MongoDB: NoSQL Document Database. 

    - There is no SQL Language, Just JavaScript.<BR /><BR />

- PhantomJs: Headless browser with a JavaScript API.

    - Optimal solution for web testing, site scraping, pages capture, SVG renderer, PDF converter and many other use cases.<BR /><BR />

- Mixing C# and JavaScript

    - At least 4 JavaScript runtimes  available on CodePlex.com
    
        - Jurrasic, Noesis+V8, IronJS, Jint<BR /><BR />

    - Why: [Embedding JavaScript in a C# application (Part I)](http://frederictorres.blogspot.com/2011/06/embedding-javascript-in-c-application.html)
    -  [Running JavaScript from C# with a hint of dynamic](http://frederictorres.blogspot.com/2011/06/running-javascript-from-c-with-hint-of.html)

**/
 
//code Reason 2 - JavaScript is now really really fast
/**

    Company     Browser     JavaScript Engine   HTML Rendering Engine
    -----------------------------------------------------------------
    Google      Chrome      V8                  Web Kit
    Apple       Safari      Nitro               Web Kit
    Mozilla     FireFox     JagerMonkey         Gecko
    Microsoft   IE          Chakra              Trident/MSHTML
    Opera       Opera       Carakan             Presto

The performance of Google V8 JavaScript runtime are close to C#.
**/

//code Reason 1 - We can get rid of the bad and the Ugly parts
/**
![](../TheGoodTheBadTheUgly.jpg)

- If you understand JavaScript
- Follow some best practices

- JavaScript becomes a viable and fun programming language
**/


//code Hello World
/**
- About this program. A Winform application that displayed

    - Slides with C# and JavaScript source code
    - On the right the output of the JavaScript execution
    
- As always

**/
    console.log("Hello World");

//C#
public class Program {
    static void Main(string[] args){
        Console.WriteLine("Hello World");
    }
}

//code Let's Start
/**

**/
