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

Web Site:   ***http://www.FredericTorres.net***

            You can find this presentation on my web site

State:      Massachusetts

<HR />

- MS-DOS 2.0

- Day C# ~ Night JavaScript

- I am currently focusing on
     - developing HTML5 app targeting iOS and Android devices (with Visual Studio)
     - Chaka - http://frederictorres.net/iphone.asp?app=1
**/
//code Disclaimers
/**
- Not a JavaScript Guru

- My implementations, with out of the box JavaScript

**/

//code What is this presentation about and not about?
/**

- This is not an introduction to JavaScript

- It is about making you discover a side of JavaScript, you probably do not know.

    - C# features as the starting point.<BR><BR>


    ***The end goal is ...***
    <TABLE border="0" cellpadding="3" cellspacing="3">
    <TR>
        <TD>![](../JavaScriptDefinitveGuide.jpg)</TD>
        <TD>![](../JavaScriptTheGoodParts.jpg)</TD>
    </TR>    
    <TR>
        <TD>JavaScript: The Definitive Guide</TD>
        <TD>JavaScript: The Good Parts and over</TD>        
    </TR>
    <TR>
        <TD>[Videos from Douglas Crockford](http://yuilibrary.com/theater/douglas-crockford/)</TD>            
    </TR>
    </TABLE>
            
**/

//code About The Audience
/**

**/

//code About The Audience
/**
- How many of you hate JavaScript?
**/

//code About The Audience
/**
- How many of you hate JavaScript?

- How many of you really like JavaScript?
**/

//code About The Audience
/**
- How many of you hate JavaScript?

- How many of you really like JavaScript?

- How many of you are C#, VB, Java, C++ developers?
**/

//code Top 4 Reasons To Learn JavaScript In 2011

//code Reason 4 - JavaScript is/will be the programming language for phones and tablets
/**
![html5.jpg](../html5.jpg)

JavaScript + HTML5 + [jQuery Mobile, Sencha Touch, PhoneGap, Titanium] are the tools to develop applications for

- iOS : iPhone, iTouch, iPad 
- Android : phones and tablets
- BlackBerry OS: BlackBerry Phones
- WebOS : phones and tablets (Almost dead) 
- Windows 8 : Coming in 2012
**/


//code Reason 4 - JavaScript is/will be the programming language for phones and tablets
/**
- The LinkedIn App [Brand New LinkedIn Mobile Experience: Faster, Simpler, and Better - Chad Whitney](http://blog.linkedin.com/2011/08/16/new-linkedin-mobile/)

    <img src="../LinkedIn.png" />
**/

//code Reason 4 - JavaScript is/will be the programming language for phones and tablets
/**
<script>
    var iPhoneImgCounter = 1;
    function nextImage(){
        var
            img = $("#iPhoneImg");
        iPhoneImgCounter++;
        if(iPhoneImgCounter==6)
            iPhoneImgCounter = 1;
        img[0].src = "../iPhone/IMG"+iPhoneImgCounter+".png";
    }
</script>
<img id="iPhoneImg" onclick="nextImage();" src="../iPhone/IMG1.png" alt="" />
**/

//code Reason 3 - JavaScript now runs on the Server
/**
- NodeJs: Build scalable network application, without multi-threading
    - web app, web service, irc server, pop server<BR /><BR />

- MongoDB: NoSQL Document Database. 

    - There is no SQL Language, Just JavaScript.<BR /><BR />

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



- Why is JavaScript really fast now ?

- The performance of Google V8 JavaScript runtime are close to C#.

**/

//code Reason 1 - We can get rid of the bad and the Ugly parts of JavaScript
/**

- It is ***true***, there are a lot of ugly things in JavaScript

<CENTER>
<IMG id="IIventedTheInternet" SRC="../IInventedTheInternet.jpg"  style="display:none" />
<BUTTON class="NextButton" id="butIIventedTheInternet" onclick="
$('#IIventedTheInternet').show();
$('#butIIventedTheInternet').hide();">
EVENT AL GORE HAD SOMETHING<BR/>TO SAY ABOUT JAVASCRIPT
</BUTTON>
</CENTER>

Fact: [Al Gore saying: I created the internet](http://www.youtube.com/watch?v=BnFJ8cHAlco) 

**/

//code Reason 1 - We can get rid of the bad and the Ugly parts of JavaScript
/**
![](../TheGoodTheBadTheUgly.jpg)

- If you understand JavaScript
- Follow some best practices
- JavaScript becomes a viable and fun programming language
**/aaaa 

//code Hello World
/**
- About this program. A Winform application that displays

    - Slides with C# and JavaScript source code
    - On the right the output of the JavaScript execution
    <BR/><BR/>

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
- Please ask questions
- I have planned for the presentation and questions for the 60 minutes
**/
