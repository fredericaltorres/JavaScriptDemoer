
//code The World's Most Misunderstood Programming Language
/**
- 1998-2008, Misunderstanding
- 2008-2011, The new era 
    - Because of the name JavaScript
        - JavaScript is more about LISP looking like Java
    - Different implementations: Netscape and Microsoft
    - Object orientation is different than most language
    - Type coercion
    - No concept of module and namespace, to write well organized code
    - No good debugger
    - Plenty weird stuffs
**/


//code Stuff Happen
/**
- Ajax
- GMail
- Frameworks:Prototype, jQuery, YUI
- 2008 The Chrome browser. JavaScript is now really fast
- More tooling
    - jsLint - http://www.jslint.com
    - Google Closure Tools - http://code.google.com/closure
- More people understand JavaScript

It is also fun to:


**/


//code Anonymous Type vs Object Literal
/**
**/
	var p = { LastName : "Torres" };
//C#
	var p = new { LastName = "Torres" };



//code Class vs Function Constructor
/**
- The other way to define classes and instances in JavaScript
**/
function Person(lastName, firstName){

    this.LastName  = lastName;
    this.FirstName = firstName;
}
var p = new Person("Torres", "Frederic");
print(p.LastName);
//C#
public class Person{

    public string LastName  { get; set; }
    public string FirstName { get; set; }

    public Person(string lastName, string firstName){
        this.LastName  = lastName;
        this.FirstName = firstName;
    }
    static void Main(){
        var p = new Person("Torres", "Frederic");
        Console.WriteLine(p.LastName);
    }
}


//code Virtual Methods
/**
- In JavaScript all properties are virtual and public
- In JavaScript all methods are virtual and public
**/
//#include person.js
//#include person.cs
function Employee(lastName, firstName, company) {
     
    Person.call(this, lastName, firstName); // (X) Base constructor
    this.Company = company;

	this.run = function(){ 
        print(this.FirstName + " " + this.LastName + " is running...");
    }
}
Employee.prototype = new Person();

var e = new Employee("Torres", "Frederic", "ACompany");
e.run();
//C#
public class Employee : Person {

    public string Company  { get; set; }
    
    public Employee(string lastName, string firstName, string company)
                    :base(lastName,firstName) { // (X) Base constructor
        this.Company = company;
    }
    public override void Run(){
        Console.WriteLine(this.FirstName + " " + this.LastName + " is running...");
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", "ACompany");
        e.Run();         
    }
}

//code Optional Parameters
/**
- With C# 4.0, we have optional parameters
- In javaScript all parameters are optional
**/
Person = function (lastName, firstName, company){

    if(typeof company === 'undefined')
        company = null; // Define default value

    this.LastName  = lastName;
    this.FirstName = firstName;
    this.Company   = company; 
}
var p = new Person("Torres", "Frederic");
print("Company:" + p.Company);
//C#
public class Person {
    public string LastName  { get; set; }
    public string FirstName { get; set; }
    public string Company   { get; set; }

    public Person(string lastName, string firstName, string company = null){
        this.LastName  = lastName;
        this.FirstName = firstName;
        this.Company   = company;
    }
    static void Main(){
        var p = new Person("Torres", "Frederic");
        Console.WriteLine("Company:" + p.Company);
    }
}
//code Optional Parameters
/**
- A shorter syntax
- [Truthy and falsy in JavaScript](http://11heavens.com/falsy-and-truthy-in-javascript)
- In JavaScript the following values are  regarded as false: undefined, null, 0, "", NaN
**/
Person =  function (lastName, firstName, company){

    company = company || null; // Define default value

    this.LastName  = lastName;
    this.FirstName = firstName;
    this.Company   = company; 
}
var p = new Person("Torres", "Frederic");
print("Company:" + p.Company);

//code Extension Methods
/**
- Let's extend the JavaScript Array with a method add()
**/
Array.prototype.add = function (v) {

    this.push(v);   
}

var a = [];
 
a.add(1);
a.add(2);
a.add(3);

a.forEach(function(v){ print(v); });

//C#

var a = new List<int>();

a.Add(1);
a.Add(2);
a.Add(3); 

a.ForEach(v => Console.WriteLine(v));

//code Extension Methods
/**
- Let's extend the JavaScript Array with a method add()
- Let's make sure that the method does not already exist
**/
if (typeof Array.prototype.add !== 'function') {

    Array.prototype.add = function (v) {

        this.push(v);   
    }
}

var a = [];
 
a.add(1);
a.add(2);
a.add(3);

a.forEach(function(v){ print(v); });


//code Prototype Chain
/**
![protoypal inheritance](../PersonEmployeePrototypInheritance.png)
**/


//code JavaScript Object vs Dictionary<K,V>
/**
- Object literal notation
**/
var trace = {
    Debug     : true     ,
    Trace     : "warning",
    TraceSize : 1000
};
for(var e in trace){
    print(e + " = " + trace[e]);
}
//C#
var trace = new Dictionary<string,object>() {
    { "Debug"    , true      },
    { "Trace"    , "warning" },
    { "TraceSize", 1000      }
};
foreach(var e in trace){
    Console.WriteLine(e.Key + " = " + e.Value.ToString());
}



//code C# and JavaScript Intellisense in Visual Studio 2010
/**
- In Visual Studio 2010, install the Microsoft JavaScript Extension
- Show demo with file Intellisense.js and file app.js
**/
    function DoSomthing(o){
        ///	<summary>
        /// Do something with the object        
        ///	</summary>
        ///	<param name="instance" type="object">The object to do something important</param>
        return null;
    }
//C#
public class Program {    

    /// <summary>
    /// Do something with the object
    /// </summary>
    /// <param name="o">The object to do something important</param>
    /// <returns>Return null</returns>
    public static string DoSomthing(object o){
            
        return null;
    }
    static void Main(){    
            
    }
}

//code JavaScript Object vs Dictionary<K,V>
/**
- The ***Key()*** vs ***Object.keys()***
- ECMAScript 5th Edition or include http://augmentjs.com/
**/
var trace = {
    Debug     : true     ,
    Trace     : "warning",
    TraceSize : 1000
};

var keys = Object.keys(trace);

for(var i=0; i < keys.length; i++){
    print(keys[i]);
}
//C#
var trace = new Dictionary<string,object>() {
    { "Debug"    , true      },
    { "Trace"    , "warning" },
    { "TraceSize", 1000      }
};

var keys = trace.Keys;

foreach(var k in trace.Keys){
    Console.WriteLine(k);
}

//code JavaScript Array Used As A Queue<T>
/**

**/
var queue = [];
 
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
 
while(queue.length>0){
 
    print(queue.pop());
}

//C#
var queue = new Queue<int>();

queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
             
while(queue.Count>0){
 
    Console.WriteLine(queue.Dequeue());
}


//code Class vs Function Constructor
/**
- Another way to add a method to an object
**/
function Person(lastName, firstName){

    this.LastName  = lastName;
    this.FirstName = firstName;
}

Person.prototype.run = function(){  

    print(this.LastName + " is running...");
}

var p = new Person("Torres", "Frederic");
p.run();



//code Virtual Methods - ***
/**
- Very quickly
- In JavaScript all properties and methods are virtual and public
**/
//#include person.js
//#include person.cs
function Employee(lastName, firstName, company) {
     
    Person.call(this, lastName, firstName);
    this.Company = company;

    this.run = function(){ 
        Employee.prototype.run.call(this); // (X) call the base method
        print(this.FirstName + " " + this.LastName + " is running...");
    }
}
Employee.prototype = new Person();
var e = new Employee("Torres", "Frederic", "ACompany");
e.run();
//C#
public class Employee : Person {

    public string Company  { get; set; }
    
    public Employee(string lastName, string firstName, string company)
                    :base(lastName,firstName) {
        this.Company = company;
    }
    public override void Run(){
        base.Run(); // (X) call the base method
        Console.WriteLine(this.FirstName + " " + this.LastName + " is running...");
    }
    static void Main(){
        var e = new Employee("Torres", "Frederic", "ACompany");
        e.Run();         
    }
}

//code Inheriting from a List<T> vs Inheriting From An Array
/**
**/
//#include person.js
//#include person.cs
function PersonList(name){
    this.Name = name;
    this.GetSumYears = function(){
        var
            i     = 0,
            total = 0;
        for(i=0; i < this.length; i++)
            total += this[i].BirthDate.getFullYear();
        return total;
    }
}
PersonList.prototype = [];

var personList = new PersonList("MyList");
personList.push(new Person("Descartes", "Rene"        , new Date(1596, 3-1, 31)));
personList.push(new Person("Pascal"   , "Baise"       , new Date(1623, 6-1, 19)));
personList.push(new Person("Laplace"  , "Pierre-Simon", new Date(1749, 3-1, 23)));
print("Total "+personList.Name+" "+personList.GetSumYears());
//C#
public class PersonList : List<Person> {
    public string Name;
    public PersonList(string name){
        this.Name = name;
    }
    public int GetSumYears() {
        var total = 0;
        foreach (var p in this)
            total += p.BirthDate.Year;
        return total;
    }
}
public class Program {    
    static void Main(){
        var personList = new PersonList("MyList");
        personList.Add(new Person("Descartes", "Rene"        , new DateTime(1596, 3, 31)));
        personList.Add(new Person("Pascal"   , "Baise"       , new DateTime(1623, 6, 19)));
        personList.Add(new Person("Laplace"  , "Pierre-Simon", new DateTime(1749, 3, 23)));
        Console.WriteLine(String.Format("Total {0} {1}", personList.Name, personList.GetSumYears()));
    }
}


//code Reason 6 - JavaScript is like VISA: Accepted Everywhere
/**
![](../Visacard.jpg)

- All Platforms: .NET, LAMP, Java, Rail

- All OS: Windows, Linux, Mac OS, Others

- All companies

- All browsers (including phones and tablets)
    
***No religion war - Every body does it.***
**/

//code Reason 5 - JavaScript is the programming language of the web
/**

- Laptop, Desktop, NetBook

- IE9/IE10, Chrome10, FireFox4, Safari5, Operaxx
**/


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
//code Reason 6 - Because Nobody Does
/**

- [The World's Most Popular Programming Language](http://www.quora.com/Is-JavaScript-the-most-popular-programming-language-in-the-world)

- [The World's Most Misunderstood Programming Language by Douglas Crockford](http://javascript.crockford.com/javascript.html)

- The World's Most Hated Programming Language

<IMG id="IDoNotUsuallyWriteCodeButWhenIDo" SRC="../IDoNotUsuallyWriteCodeButWhenIDo.jpg" style="display:none" />
<BUTTON id="butIDoNotUsuallyWriteCodeButWhenIDo" class="NextButton" onclick="
$('#IDoNotUsuallyWriteCodeButWhenIDo').show();
$('#butIDoNotUsuallyWriteCodeButWhenIDo').hide();">WHAT IS THE MOST INTERESTING MAN 
<BR>IN THE WORLD IS SAYING ABOUT THAT ?    
</BUTTON>

**/



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



//code JavaScript Object vs Dictionary<K,V>
/**
- The ***ContainKey()*** vs ***in*** operator
**/
var trace = {
    Debug     : true     ,
    Trace     : "warning",
    TraceSize : 1000
};

if(trace["Debugger"] === undefined) // Solution 1
    print("Key Debugger is not defined the dictionary");

if("Debug" in trace)                // Solution 2
    print(trace["Debug"]);


//C#    
var trace = new Dictionary<string,object>() {
    { "Debug"    , true      },
    { "Trace"    , "warning" },
    { "TraceSize", 1000      }
};

if(trace.ContainsKey("Debug"))
    Console.WriteLine(trace["Debug"]);


    

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


//code Reason 4 - JavaScript is/will be the programming language for phones and tablets
/**
- The NetFlix App: [Why We Choose HTML5 for User Experiences on Devices - John Ciancutti, VP of Personalization Technology](http://techblog.netflix.com/2010/12/why-we-choose-html5-for-user.html)

![](../NetFlix.png)
