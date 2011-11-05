//code Undestanding JavaScript 
/**

***The tale of the { }***

Frederic Torres 2011

**/
//code Undestanding JavaScript - In the beginning...
/**
- JavaScript was created by Brendan Eich of Netscape in 1995

- He was told to create a programming language to run in the browser Netscape

- By the way you have 2 weeks (That is the legend).

- One of his favorites programming languages was Scheme (Lisp)

- Because of marketing and politic between Netscape and Sun, he was told to 
make it look like Java, and later the language was re-named JavaScript.

- But there was a problem: JavaScript had nothing to do with Java, except that it looks
like Java. And then the confusion started.

**/
//code Undestanding JavaScript 
/**

[JavaScript:The World's Most Misunderstood Programming Language](http://javascript.crockford.com/javascript.html)

Douglas Crockford - www.crockford.com

- Senior JavaScript architect at Yahoo!
- "Inventor" of JSON
- JavaScript, JSON and YUI Evangelist (YUI=Yahoo! User Interface Library)

Frederic Torres 2011
**/

//code Hello World
/**
- About this program. A Winform application that displayed

    - Slides with JavaScript code
    - On the right the output of the JavaScript execution
    
- As always

**/
    console.log("Hello World");

    print("Hello World");

//code The shortest object oriented program in the world
/**
Is this make any sense to you?
**/
    { }

//code The shortest object oriented program in the world
/**
Is this make any sense to you?
**/
    p = { }

//code The shortest object oriented program in the world
/**
Is this make any sense to you?
**/
	var p = { }

//code The shortest object oriented program in the world
/**
Semi colon are optional, but it is recommended to add them
**/
	var p = { }; 

//code The shortest object oriented program
/**
- Object Literal
- This is close to anonymous type in C#
**/
	var p = { LastName:"Torres" };

//code The shortest object oriented program

	var p = { 

        LastName  : "Torres", 
        FirstName : "Frederic" 
    };

//code The shortest object oriented program

	var p = {

		LastName  : "Torres",
		FirstName : "Frederic",
		BirthDate : new Date(1964, 12-1, 11) // Month WTx!
	};

//code An simple object oriented program

    var p = {

		LastName    : "Torres",
		FirstName   : "Frederic",
		BirthDate   : new Date(1964, 12-1, 11),
		OnTheRecord : false,
		Age         : 47,
		Amount      : 1234.56
	};

    print(p);

//code An simple object oriented program
/**
Accessing a property
**/

    var p = {

		LastName   : "Torres",
		FirstName  : "Frederic",
		BirthDate  : new Date(1964, 12-1, 11),		
	};

    print(p.LastName);

    print(p["LastName"]);    

//code An simple object oriented program
/**
- Let's add one method
**/

    var p = {

		LastName   : "Torres",
		FirstName  : "Frederic",
		BirthDate  : new Date(1964, 12-1, 11),

		run        : function(){ 

                        print(this.FirstName + " is running...");
                     }

	};

	p.run();

    p["run"]();


//code For Each. Looping through an instance content
/**
- Reflection
**/

    var p = {

		LastName    : "Torres",
		FirstName   : "Frederic",
		BirthDate   : new Date(1964, 12-1, 11),
		OnTheRecord : false,
		Age         : 47,
		Amount      : 1234.56,

		run         : function(){   
                            
                        print(this.LastName + " is running...");
                     }
	};

    for(var k in p){

        print(k + " = " + p[k]);
    }

//code For Each. Looping through an instance content
/**
I do not want to print the methods
**/
    var p = {

		LastName    : "Torres",
		FirstName   : "Frederic",
		BirthDate   : new Date(1964, 12-1, 11),
		OnTheRecord : false,
		Age         : 47,
		Amount      : 1234.56,

		run         : function(){ 

                        print(this.LastName+" is running..."); 
                     }
	};

    for(var k in p){

        if(typeof p[k] !== "function")
            print(k + " = " + p[k]);
    }
        
//code The in operator

    var p = {

		LastName    : "Torres",
		FirstName   : "Frederic",
		BirthDate   : new Date(1964, 12-1, 11),
		OnTheRecord : false,
		Age         : 47,
	};

    if("Age" in p)
        print("p has a property Age");

    if("NewAge" in p)
        print("p has a property NewAge");


//code Instance vs Dictionary
/**
- A JavaScript object is also a dictionary or hash table
- A JavaScript object is also called associative array
    [JavaScript Associative Arrays Demystified](http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified)
**/
// An instance
var person = {
		LastName : "Torres"
    };
    if("LastName" in person)
        print(person.LastName);
    
// A dictionary 
var dic = {
		LastName : "Torres"
    };
    if("LastName" in dic)
        print(dic["LastName"]);

//code null vs undefined
/**
- The concept of undefined does not exist in C#
- In C# everything is defined
**/
    var p = {

		LastName    : "Torres",
		FirstName   : "Frederic",
		BirthDate   : new Date(1964, 12-1, 11),
		OnTheRecord : false,
		Age         : 47,
	};

    p.Amount = null;
    print("p.Amount:" + p.Amount);
    print("p.SuperAmount:" + p.SuperAmount);

    if(p.SuperAmount === undefined)
        print("Instance p has no property SuperAmount");
