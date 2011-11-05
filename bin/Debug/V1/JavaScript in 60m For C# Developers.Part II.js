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

//code Overview
/**
- Object Orientation And Inheritance    
    - Reflection, Methods, Constructor, Inheritance, Virtual Methods and Private Property<BR><BR>

- Miscellaneous
    - Static Member, Namespace, Enum Type and .NET Attribute<BR><BR>

- Data Structures     
    - Dictionary, Array, List, Queue and Stack.<BR><BR>

- Functional Programming
    - Lambda Expression and LINQ<BR><BR>

**/

//code Object Orientation And Inheritance
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
//C#
	var p = new { LastName = "Torres" };
    
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

//code Reflection vs Reflection On Steroid
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

//code Reflection vs Reflection On Steroid
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
//code Class vs Function Constructor
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
- Calling the base constructor
**/
//#include person.js
//#include person.cs
function Employee(lastName, firstName, company) {
     
    Person.call(this, lastName, firstName); // (2) Base constructor
    this.Company   = company;
}
Employee.prototype = new Person();  // (1) Inheritance

var e = new Employee("Torres", "Frederic", "ACompany");
e.run();
print(e instanceof Person);
print(e instanceof Employee);
//C#
public class Employee : Person {  // (1) Inheritance

    public string Company  { get; set; }
    
    public Employee(string lastName, string firstName, string company)
                    :base(lastName, firstName) { // (2) Base constructor
        this.Company = company;
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", "ACompany");
        e.Run(); 
        Console.WriteLine(e is Person);
        Console.WriteLine(e is Employee);
    }
}

//code Inheritance
/**
- Classical Inheritance

![](../ClassicalInheritance.png)
**/

//code Inheritance
/**
- Prototypal Inheritance

![](../PrototypeInheritance.png)  
**/


//code Private Property
/**
- The first part of the closure concept
**/
//#include person.js
//#include person.cs
function Employee(lastName, firstName, company, reservedParkingSpot) {
    var
        _reservedParkingSpot = reservedParkingSpot;

    Person.call(this, lastName, firstName);
    this.Company = company;

    this.run = function() {
        print(this.LastName + " reservedParkingSpot:" + _reservedParkingSpot);
    }
}
Employee.prototype = new Person();
var e = new Employee("Torres", "Frederic", "ACompany", true);
e.run();
//C#
public class Employee : Person {

    public string Company               { get; set; }
    private bool  _reservedParkingSpot  { get; set; }
    
    public Employee(string lastName, string firstName, string company, bool reservedParkingSpot)
                    :base(lastName,firstName) {
        this.Company              = company;
        this._reservedParkingSpot = reservedParkingSpot;
    }
    public override void Run(){
    
        Console.WriteLine(this.LastName + " reservedParkingSpot:" + _reservedParkingSpot);
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", "ACompany", true);
        e.Run();
    }
}
//code Miscellaneous
/**

- Static Member
- Namespace
- Enum Type
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
//code Nested Namespace And Shortcut - ***
/**
- Very quickly
**/

/**
**/
var MyLibrary = { };
MyLibrary.People = {
    Person : function (lastName, firstName){
        this.LastName  = lastName;
        this.FirstName = firstName;
    }
}
var people = MyLibrary.People;
var p = new people.Person("Torres", "Frederic");

//C#
using people = MyLibrary.People; 
namespace MyLibrary.People {
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
        var p = new people.Person("Torres", "Frederic");
    }
}
//code Enum Type
/**

**/
//#include person.js
//#include person.cs

var EmployeeType = {
    Developer : "Developer", // Why as string?
    Manager   : "Manager"  ,    
}
function Employee(lastName, firstName, company, type) {

    Person.call(this, lastName, firstName);
    this.Company = company;
    this.Type    = type;
}
Employee.prototype = new Person();

var e = new Employee("Torres", "Frederic", "ACompany", EmployeeType.Developer);
e.run();
//C#
public enum EmployeeType {
    Developer,
    Manager  ,
}
public class Employee : Person {

    public string Company    { get; set; }
    public EmployeeType Type { get; set; }
    
    public Employee(string lastName, string firstName, string company, EmployeeType type)
                    :base(lastName,firstName) {
        this.Company = company;
        this.Type    = type;
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", "ACompany", EmployeeType.Developer);
        e.Run();         
    }
}

//code .NET Attribute vs Function Property
/**
**/
function MyClass(){

    this.run = function(){

    }
    this.run.SuperMethod = true;
}
function GetSuperMethodName(o){
    for(var p in o)
        if(typeof o[p] ==="function") 
            if(o[p].SuperMethod===true)
                return p;
    return null;
}
var myClass = new MyClass();
print("The SuperMethod is " + GetSuperMethodName(myClass));
//C#
[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
public class SuperMethodAttribute : System.Attribute {
}        
public class MyClass {    
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
        var myClass = new MyClass();
        Console.WriteLine("The SuperMethod is " + GetSuperMethodName(myClass));
    }
}
//code Other Miscellaneous
/**
- Optional Parameters
- Extension Methods
**/

//code Data Structures
/**
**/


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

//code JavaScript Object vs Dictionary<K,V>
/**
- The ***ContainKey()*** vs ***in*** operator
**/
var trace = {
    Debug     : true     ,
    Trace     : "warning",
    TraceSize : 1000
};

if("Debug" in trace)
    print(trace["Debug"]);
//C#
var trace = new Dictionary<string,object>() {
    { "Debug"    , true      },
    { "Trace"    , "warning" },
    { "TraceSize", 1000      }
};

if(trace.ContainsKey("Debug"))
    Console.WriteLine(trace["Debug"]);
    

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
- In C# world: List&lt;T&gt; where T is an object
- This is the recommended way to create an array
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
- A JavaScript Array is an object where the properties can only be integer values
- A JavaScript Array is a dictionary where the key is an integer
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


//code Functional Programming
/**
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


//code JavaScript and Visual Studio 2010
/**
Visual Studio 2010 supports

- Color coding 
- JavaScript intellisense

Download the jScript Extension(s) for VS 2010.
**/
function isNullOrUndefined(v) {
    ///	&lt;summary>
    /// Returns true if v is null or undefined 
    ///	&lt;/summary>
    ///	&lt;param name="v" type="">The value to test&lt;/param>
    return (v === null) || (typeof v == "undefined"); 
}

/// &lt;reference name="chaka.lib.js"/>
/// &lt;reference path="chaka.lib.js"  />

//code Conclusion
/**
JavaScript

- Simple programming language

- Deserved to be understood

- Once you undertand it and follow some best practices to work around the bad part. 
- You may enjoy use it.

- And in 2011, JavaScript runs fast everywhere.
**/

//code Questions
/**
<H1>
- ?
</H1>
**/
