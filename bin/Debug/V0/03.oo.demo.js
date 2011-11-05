//code Undestanding JavaScript 
/**

***Object Orientation***

Frederic Torres 2011

**/
//code Undestanding JavaScript 
/**

JavaScript is an Object Oriented Language, of a different kind

- Object and constructor, but no class
- Prototype-oriented inheritance vs class-oriented inheritance 
- Private property and function
- Interface. In Dynamic Language there is no need, we use Duck Typing
- Virtual methods

- I am confused with JavaScript object orientation?
    - Everybody is
    - Multiple ways to achieve the features mentioned above 
        - Out of the box
        - With special library [classy](http://classy.pocoo.org/)

Looking for JavaScript libraries : [microjs.com](http://microjs.com/) 
    

**/

//code Prototypal Inheritance
//slideid PersonBaseClass
/**
- The key idea: The prototype
- As a matter of convention...
**/
function Person(lastName, firstName, birthDate) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;

    this.work = function(){

        print(this.FirstName + " is working");
    }
}
//main
var p = new Person(
               "Torres", "Frederic", new Date(1964, 12-1, 11)
            );
p.work();
//code Prototypal Inheritance
/**
- How to inherit
- We cannot reuse the code in the base class constructor
**/
//includeslide PersonBaseClass
function Employee(lastName, firstName, birthDate, company) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;
    this.Company   = company;
}
Employee.prototype = new Person(); // << Inheritance

////////////////////////////////////////////////
var e = new Employee(
                "Torres", "Frederic", 
                new Date(1964, 12-1, 11), "ScerIS"
            );
e.work();
print(e.toString());
print(e instanceof Person);
print(e instanceof Employee);

  
//code How does prototypal inheritance works
/**
![PersonEmployeePrototypInheritance.png](../PersonEmployeePrototypInheritance.png)
**/
/*lib
function Person(lastName, firstName, birthDate) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;

    this.work = function(){

        print(this.FirstName + " is working");
    }
}
function Employee(lastName, firstName, birthDate, company) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;
    this.Company   = company;
}
Employee.prototype = new Person(); // << Inheritance
lib*/
var e = new Employee(
                "Torres", "Frederic", 
                new Date(1964, 12-1, 11), "ScerIS"
            );
e.work();
e.toString();

//code Prototypal Inheritance
/**
- How to overwrite a method
**/
//includeslide PersonBaseClass
function Employee(lastName, firstName, birthDate, company) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;
    this.Company   = company;

    this.work = function(){        

        Employee.prototype.work.call(this);
        print(this.FirstName + " is working at " + this.Company);
    }
}
Employee.prototype = new Person(); // << Inheritance

////////////////////////////////////////////////

var p = new Employee(
                "Torres", "Frederic", 
                new Date(1964, 12-1, 11), "ScerIS"
            );
p.work();


//code IDE
/**
- With Visual Studio 2010 with the JScript Editor extension, you get some intellisense.
- There is a standard to comment function to get intellisense in Visual Studio 2010. (See ASP.NET)
**/

//code Private property
/**
- Private property cannot be pre fixed with this
- Prefixing private member with _ is not an absolute standard
- Your first introduction to closure
**/
function Person(lastName, firstName, birthDate) {
    
    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;

    var currentYear = new Date().getFullYear(); // Local variable
     
    // A private property
    var _age =  currentYear - this.BirthDate.getFullYear();

    this.toString = function (){

        return this.LastName + " " + this.FirstName + " " + _age;
    }
}
var p = new Person(
            "Torres", "Frederic", new Date(1964, 12-1, 11)
            );
print(p.toString());
  
//code JavaScript Object Model
/**
![JavaScriptObjectModel](../JavaScriptObjectModel.png)

- Arguments is an object that behave kind like an Array
- In v 5 it is more an array
**/


//code function is everything, everything is function
/**
- The tale of the Scope 
- Case 1
- Any volunteer to explain the output
**/
var a = 1;

function f() {

    a = 2;
    return a;
}

print(a);

print(f());

print(a);

//code It is time to talk about Scope
/**
- Case 2
- Any volunteer to explain the output
**/
var a = 1;

function f() {

    var a = 2;
    return a;
}
print(a);
print(f());
print(a);


//code It is time to talk about Scope
/**
- Case 3
- Any volunteer to explain the output
**/
var a = 1;

function f() {

    var a = 2;

    if(a===2){

        var a = 3;
    }        
    return a;
}
print(a);
print(f());
print(a);

//code It is time to talk about Scope
/**
- Another thing
**/
function f() {

    print(a);    
}

f();

//code It is time to talk about Scope
/**
- Another thing
**/
function f() {

    var a;

    print(a);
}

f();

//code It is time to talk about Scope
/**
- Another thing
**/
function f() {

    var a = 1;

    print(a);
}

f();

//code It is time to talk about Scope
/**
- This sample will drive you crazy
- Can somebody explain this?
**/
function f() {

    print(a);

    var a = 1;

    print(a);
}

f();



//code It is time to talk about Scope
/**
- This sample will drive you crazier
**/
function f() {

    print(a);

    if(false){

        var a = 1;
    }

    print(a);
    
    if(true){

        var a = 1;
    }
    print(a);
}

f();

//code It is time to talk about Scope
/**
- This language makes no sens - [www.wtfJS.com](http://wtfjs.com)  
- I surrender tell me

*When you see this program, what really happens behind the scene is...*
**/
function f() {

    print(a);
    var a = 1;
    print(a);
}

f();


//code There can be only one!
/**
![](http://ia.media-imdb.com/images/M/MV5BMTM4MzU4MDk2MF5BMl5BanBnXkFtZTcwMDQzNzQzMQ@@._V1._SY317_CR12,0,214,317_.jpg)

- In JavaScript there is only one Scope: the function
**/

//code One Scope
/**
- Hoisting: lift, raise; especially : to raise into position by or as if by means of tackle
- [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting)
**/
function f() {
    
    print(a);
    var a = 1;
    print(a);
}

function f() {

    var a; // JavaScript runtime automatically move the 
           // declaration of a at the top of the function
    print(a);
    a = 1;
    print(a);
}

f();

//code One Scope - Best Practices
/**
- Recommended way to declare and initialize variables in JavaScript
- Always at the top of the function
**/
function f() {
    
    print(a);
    var a = 1;
    print(a);
}

function f() {

    var a = 1;

    print(a);
    print(a);
}

f();
//code One Scope - Best Practices
/**
- The first 4 lines of code of jQuery 1.6.1
**/
(function( window, undefined ) {

// Use the correct document accordingly with 
// window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
})

//code One Scope - Best Practices
/**
- My own style
**/
function f(){
    var 
        a = 1,
        b = computeSomeStuf(),
        c = $("#MyDiv"),
        i = 0,
        z; // z will have a value of undefined
    
    for(i=0; i<10; i++){

    }
}
//code One Scope - Let's go deeper in the function's world
/**
- Let's go back to our previous sample
- What if I want to create a sub scope
- How would you do it?
**/
function f() { // this is a function statment
        
    var a = 1;

    if(a===1){

        var a = 2;
        print(a);
    }    
    print(a);
}

f();

//code One Scope - This language is fun
/**
**/
var f = function() { // this is a function expression

    print(1);
}

f();  
       
//code One Scope - This language is fun and functional
/**
**/
var f = ( function() { // this is a function expression

    print(1);
} );

f();      

//code One Scope - This language is super fun and functional
/**
- What is this code doing?
**/     
( function() {

    print(1);

} ) ();

//code One Scope - This language is super fun and functional
/**
- Create and invoke a function on the spot
**/     
( function() {

    print(1);

} ) ();

//code One Scope - This language is awesomely fun and functional
/**
- What if I want to create a sub scope
- How would you do it?
**/
function f() {
        
    var a = 1;

    if(a===1){

        (function(){

            var a = 2;

            print(a);

        })();
    }       
    print(a);
}

f();


//code Private function
/**
- Is this this wrong?
- There is no private method, only private function
**/
function Person(lastName, firstName, birthDate) {    
    var 
        $this       = this,
        currentYear = new Date().getFullYear();

    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;

    function computeAge(){
        
        print(this);
        return currentYear - $this.BirthDate.getFullYear();        
    }
    this.toString = function (){
            
        return this.LastName+" "+this.FirstName+" "+computeAge();        
    }
}
var p = new Person(
            "Torres", "Frederic", new Date(1964, 12-1, 11)
            );
print(p.toString());


//code Object Orientation
/**
- The End
**/
