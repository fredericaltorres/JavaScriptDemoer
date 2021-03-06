//code .
/**

<center>

<BR><BR><BR>

<H1>JavaScript in 60 minutes for C# developers

<BR /><BR /><BR />

Part II

<BR /><BR /><BR />

Frederic Torres 2011
</H1>

</center>

**/


//code before we start, Keywords
/**

- C#          
    - 79 Keywords <BR/><BR/>

- JavaScript  
    - 23  Keywords (void, debugger and with are excluded)

http://msdn.microsoft.com/en-us/library/x53a06bb(v=VS.100).aspx
https://developer.mozilla.org/en/JavaScript/Reference/Reserved_Words
**/

//code Object Orientation
/**
**/

//code The Shortest Object Oriented Program In The World
/**
Is this make any sense to you?
**/
{ }

//code The Shortest Object Oriented Program In The World
/**
Is this make any sense to you?
**/
    p = { }

//code The Shortest Object Oriented Program In The World
/**
Is this make any sense to you?
**/
	var p = { }

//code The Shortest Object Oriented Program In The World
/**
Semi colon are optional, but it is recommended to add them
**/
	var p = { }; 

//code The Shortest Object Oriented Program In The World
/**
- Anonymous Type vs Object Literal
**/
	var p = { LastName : "Torres" };
    print(p.LastName);
//C#
	var p = new { LastName = "Torres" };
    Console.WriteLine(p.LastName);
    
//code Let's Create An Instance
/**
**/
var p = {
	LastName :  "Torres",
	run      :  function(){
                    print(this.LastName + " is running..."); 
                }
};
p.run();
//C#
public class Person{
    public string LastName { get; set; }
    public Person(string lastName){
        this.LastName = lastName;
    }
    public void Run(){
        Console.WriteLine(this.LastName + " is running...");
    }
    static void Main(){
        var p = new Person("Torres");
        p.Run(); 
    }
}

//code C# has reflection vs JavaScript Is reflection
/**
- Let's start with the JavaScript code
- 2 syntaxes to access a property value in JavaScript
**/

    var p = { LastName   : "Torres" };

    print(p.LastName);

    print(p["LastName"]);    

//C#
    const BindingFlags GET_FLAGS = BindingFlags.Instance | BindingFlags.Public | 
                                   BindingFlags.GetField | BindingFlags.GetProperty;

	var p = new { LastName = "Torres" };

    Console.WriteLine(p.LastName);

    Console.WriteLine(p.GetType().InvokeMember("LastName", GET_FLAGS, null, p, null));

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
//code The Other way to create object - Class vs Function Constructor
/**
- The other way to create objects in JavaScript
- JavaScript convention about function constructor, property and method name.
**/
function Person(lastName, firstName){

    this.LastName  = lastName;
    this.FirstName = firstName;

    this.run = function(){ // My prefered way to add method to an object
        print(this.LastName + " is running...");
    }
}
var p = new Person("Torres", "Frederic");
p.run();
//C#
public class Person{

    public string LastName  { get; set; }
    public string FirstName { get; set; }

    public Person(string lastName, string firstName){
        this.LastName  = lastName;
        this.FirstName = firstName;
    }
    public void Run(){
        Console.WriteLine(this.LastName + " is running...");
    }
    static void Main(){
        var p = new Person("Torres", "Frederic");
        p.Run();
    }
}
//code Inheritance
/**

- Classical inheritance versus [prototypal inheritance](http://www.cs.rit.edu/~atk/JavaScript/manuals/jsobj)
    - Objects inherit from other objects<BR /><BR />

- I will not go into more details because...

**/


//code Private Property
/**
- Objects have properties and they are all public
**/
//#include person.js
//#include person.cs
function Employee(lastName, firstName, reservedParkingSpot) {
    var
        _reservedParkingSpot = reservedParkingSpot;

    this.LastName  = lastName;
    this.FirstName = firstName;

    this.run = function() {
        print(this.LastName + " reservedParkingSpot:" + _reservedParkingSpot);
    }
}
var e = new Employee("Torres", "Frederic", true);
e.run();
//C#
public class Employee  {

    public string LastName             { get; set; }
    public string FirstName            { get; set; }
    private bool  _reservedParkingSpot { get; set; }

    public Employee(string lastName, string firstName, bool reservedParkingSpot){
        this.LastName             = lastName;
        this.FirstName            = firstName;
        this._reservedParkingSpot = reservedParkingSpot;
    }
    public void Run(){
    
        Console.WriteLine(this.LastName + " reservedParkingSpot:" + _reservedParkingSpot);
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", true);
        e.Run();
    }
}
//code Private Property
/**
- Based on the concept called: ***Closure***.

    - Does not exist in Pascal, C, C++, Java and C#

        - Actually Closure is possible in C#<BR/><BR/>

    - Not an easy concept to get at first

    - But once you get it, ***It will change the way you write code***
**/

//code Let's Summarize
/**
   
- **{ }** means object literal, if there is no keyword functon, if, while, for...

- **[ ]** with an object means reading/write the value of a property (object["PropertyName"])

- Keyword **for** and operator **in**

        for(var propertyName in myObject)
                print(propertyName +" " + myObject[propertyName]));

- Function constructor

- Inheritance and virtual properties/methods (*We did not talk about it. It exists*)

- Nested function, Private property and Closure.
**/

//code Let's do interesting stuff
/**

- Static Member
- Namespace
- .NET Attribute

**/

//code Static Member
/**
- First-class functions
**/
function Person(lastName, firstName){

    this.LastName  = lastName;
    this.FirstName = firstName;
}
Person.create = function(lastName, firstName){ // (X) Static Member 

    return new Person(lastName, firstName);
}
var p = Person.create("Torres", "Frederic");
//C#
public class Person{

    public string LastName  { get; set; }
    public string FirstName { get; set; }

    public Person(string lastName, string firstName){
        this.LastName  = lastName;
        this.FirstName = firstName;
    }
    public static Person Create(string lastName, string firstName){
        return new Person(lastName, firstName);
    }
    static void Main(){
        var p = Person.Create("Torres", "Frederic");
    }
}
//code Namespace
/**
- Namespace are so important in JavaScript that ...
- To avoid conflict between classes and methods in web application loading multiple libraries
**/
var MyLibrary = {
    Person : function (lastName, firstName){
        this.LastName  = lastName;
        this.FirstName = firstName;
    }
}
var p = new MyLibrary.Person("Torres", "Frederic");
//C#

namespace MyLibrary {
    public class Person{
        public string LastName  { get; set; }
        public string FirstName { get; set; }

        public Person(string lastName, string firstName){
            this.LastName  = lastName;
            this.FirstName = firstName;
        }
    }
}
public class Program{
    static void Main(){
        var p = new MyLibrary.Person("Torres", "Frederic");
    }
}
//code Namespace
/**
- Nested namespaces are possible

- Building one namespace from different files  is possible

- Shortcut to access long nested are namespace are possible
**/


//code .NET Attribute vs Function Property
/**
**/
function TheClass(){

    this.run = function(){

    }
    this.run.SuperMethod = true;
}
function GetSuperMethodName(o){
    for(var p in o)
        if(typeof o[p] === "function") 
            if(o[p].SuperMethod === true)   
                return p;
    return null;
}
var theClass = new TheClass();
print("The SuperMethod is " + GetSuperMethodName(theClass));
//C#
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class SuperMethodAttribute : System.Attribute {
}        
public class TheClass {    
    [SuperMethod]
    public void Run(){
    }
}       
public class Program {    
    public static string GetSuperMethodName(object o) {
        foreach (var mi in o.GetType().GetMembers())
            foreach (object attribute in mi.GetCustomAttributes(true))
                if (attribute is SuperMethodAttribute)
                    return mi.Name;
        return null;
    }
    static void Main() {
        var theClass = new TheClass();
        Console.WriteLine("The SuperMethod is " + GetSuperMethodName(theClass));
    }
}


//code Let's Summarize
/**
   
- With all we learned so far, we were able to create the concepts of

    - Static member
    - Namespace
    - .NET Attributes 
    - Enum Type with Object Literal (Which we did not see)
    <BR /><BR />

- JavaScript as language feature also support

    - Optional Parameters

    - Extension Methods

- What's the conclusion?    

**/


//code Data Structures
/**
**/


//code JavaScript Object vs D...
/**
What is this ?

**/
var trace = {

    On:true
}

//code JavaScript Object vs Dictionary<K,V>
/**
What is this ?

**/
var trace = {

    On:true
}

//code JavaScript Object vs Dictionary<K,V>
/**

**/
var trace = { };

trace["Debug"]  = true;
trace["Trace"]  = "warning";
trace.TraceSize = 1000;

for(var key in trace){
    print(key + " = " + trace[key]);
}

//C#
var trace = new Dictionary<string,object>();

trace["Debug"]     = true;
trace["Trace"]     = "warning";
trace["TraceSize"] = 1000;

foreach(var e in trace){
    Console.WriteLine(e.Key + " = " + e.Value.ToString());
}


//code The Shortest Structured Program In The World
/**
Is this make any sense to you?
**/
[ ]

//code The Shortest Structured Program In The World
/**
Is this make any sense to you?
**/
var a = [ ];

//code The Shortest Structured Program In The World
/**
- Array literal syntax
**/
var a = [ 1, 2, 3 ];

//code JavaScript Array
/**
- A JavaScript Array is not a C# array
- You may think that a JavaScript Array is hybrid between array and list
**/
var a = [ ];

var b = [ 1, 2, 3 ];

var c = [ "a", "b", "c" ];

//C#
var a = new List<object>();
 
var b = new List<int>() { 1, 2, 3 };

var c = new List<string>() { "a", "b", "c" };

//code What is a JavaScript Array? No Really!
/**
- ***The truth about JavaScript's Array***

**/

//code What is a JavaScript Array? No Really!
/**
- ***The truth about JavaScript's Array***

- A JavaScript Array is a ***Dictionary*** *of a special kind*

**/

//code What is a JavaScript Array? No Really!
/**
- ***The truth about JavaScript's Array***

- A JavaScript Array is an ***Object*** where the property name can only be integer values
- A JavaScript Array is a ***Dictionary*** where the keys can only be integer values

- The property length always return the max key 

![](../JavaScriptObjectModel.png)

**/



//code Iterating Through An Array
/**
- The default way
**/
var a = [ "a", "b", "c" ];
 
for(var i=0; i < a.length; i++){
 
    print(a[i]);
}
//C#
var a = new List<string>()  { "a", "b", "c" };

for(var i=0; i < a.Count; i++){
 
    Console.WriteLine(a[i]);
}
//code Iterating Through An Array
/**
- With for
- ***ATTENTION***
**/
var a = [ "a", "b", "c" ];
 
for(var i in a){
    
    print(a[i]);
}
//C#
var a = new List<string>()  { "a", "b", "c" };

foreach(var i in a){
 
    Console.WriteLine(i);
}

//code Iterating Through An Array
/**
- With forEach()
- With JavaScript 5 (ecmascript 5), the Array type has member function forEach()
- With JavaScript 3, include the library: [http://augmentjs.com](http://augmentjs.com)
**/
var a = [ "a", "b", "c" ];

a.forEach(
    function(v){
        print(v);
    }
);
//C#
var a = new List<string>()  { "a", "b", "c" };

a.ForEach(
     v => { Console.WriteLine(v); } // Lambda Statment
);
//code Data Structures
/**
JavaScript Array can be used as

- Array - Array&lt;T&gt;
- List  - List&lt;T&gt;
- Stack - Stack&lt;T&gt;
- Queue - Queue&lt;T&gt;

- Array methods:
    - ***concat, indexOf, join, pop, push, reverse, shift, slice, sort, splice, unshift, valueOf.***

With ***Extension Methods*** we can create the C# methods that we are used to.
**/

//code Let's Summarize
/**
- Data Structures

  - Dictionary
  - Array
  - List
  - Stack
  - Queue

**/


//code Functional Programming
/**
- if time allows...
**/

//code Lambda Expression vs Function
/**
- filter(), forEach(), every(), map()
- ECMAScript 5th Edition or include http://augmentjs.com/
**/
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

var evenNumbers = numbers.filter(function(i) { return i % 2 == 0; });

evenNumbers.forEach(function(n){
    print(n);
});

//C#
var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

var evenNumbers = numbers.FindAll(i => i % 2 == 0); // Lambda Expression

evenNumbers.ForEach(n => {  // Lambda Statment
    Console.WriteLine(n); 
});

//code LINQ, Lambda Expression And A List Of Custom Object
/**

**/
//#include person.js
//#include person.cs
var annoyingPeopleInHighSchool = [
    new Person("Descartes", "Rene"        ),
    new Person("Pascal"   , "Baise"       ),
    new Person("Laplace"  , "Pierre-Simon")
];
var funnyPeopleInHighSchool = annoyingPeopleInHighSchool.filter(function(p) {
    return p.LastName==="Laplace" ? p : undefined;
});
funnyPeopleInHighSchool.forEach(function(p){
    print(p.LastName);
});
//C#
public class Program {    
    static void Main(){
        var annoyingPeopleInHighSchool = new List<Person>() {
            new Person("Descartes", "Rene"        ),
            new Person("Pascal"   , "Baise"       ),
            new Person("Laplace"  , "Pierre-Simon")
        };
        var funnyPeopleInHighSchool = from p in annoyingPeopleInHighSchool
            where p.LastName=="Laplace"
            select p;
        foreach(var p in funnyPeopleInHighSchool)
            Console.WriteLine(p.LastName);
    }
}


//code Conclusion
/**
- JavaScript

  - Is a simple programming language
  
  - Deserved to be understood
  
  - Once you understand it and follow best practices to work around the bad part.
    
        - You may enjoy using it.<BR/><BR/>

  - And in 2011, ***JavaScript runs fast everywhere***.
**/

//code Questions
/**
<H1>
- ?
</H1>
**/
