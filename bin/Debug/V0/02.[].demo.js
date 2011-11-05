//code Undestanding JavaScript 
/**

***The tale of the [ ]***

Frederic Torres 2011

**/

//code The shortest structured program in the world
/**
Is this make any sense to you?
**/
    [ ]

//code The shortest structured program in the world

	var a = [ ];



//code The shortest structured program in the world
/**
**/
	var a = [ 1, 2, 3 ];


//code Array
/**
    
- Array or List
- In C# world: List&lt;T&gt; where T is an Object

- This is the recommended way to create an array
**/
    var a = [ ];
	var b = [ 1, 2, 3 ];
    var c = [ 'a', 'b', 'c' ];

//code Array
/**
- Array literal
- Something we do not have in C#, well wait a minute, see
[DynamicSugar.net](http://www.DynamicSugar.net)
**/

	var a = [ 1, 2, 3 ];

	print(a);

	print(a[0]);

//code Array
/**
- Iterating through an array
    - Recommended method
**/

	var a = [ 1, 2, 3 ];

	for(var i=0; i < a.length; i++){

	    print(a[i]);
	}

//code Array - Methods

/**
- Methods: concat, join, pop, push, reverse, shift, slice, sort, splice, unshift

- JavaScript supports static and instance extension methods so we can implement 
    - The methods add(), remove(), removeAt(), removeAll() like in .NET
**/
	var a = [];

	a.push(1); // First Syntax
	a.push(2);

	a[2] = 3;  // Second Syntax

	print(a);

	a.splice(1,1); // Remove 1 element from position 1
	print(a);
    
//code Array - Not really an array...
/**
- A JavaScript Array is not a C# array 
- A JavaScript  Array is dictionary where the key is an integer
- The property ***length*** always return the max key
**/
	var a = [];

	a[0]  = 1;

	print(a.length);

	a[9]  = 1;
	print(a.length);

    for(var i = 0; i < a.length; i++){

        print("["+i+"] "+a[i]);
    }

    print("[32000] "+a[32000]);

//code Array - Not really an array...
/**
- The for each construct using an array
- The behavior is different from C#

- Why this behavior?
**/
	var a = [ 1, 2, 3 ];
    
	for(var i in a){

        print("a["+ i + "] = " + a[i]);
    }

//code Array ''inherits from Object''
/**
- An Array can also contains properties
- Interresting, to implement the following C# Code:

    class Items : List&lt;Item&gt; {

    }
**/

	var a = [];
	a.push(1);
	a.push(2);
	print(a.length);

    a.Owner = "Fred";

    a.sum = function(){

        var summation = 0;

        for(var i = 0; i < a.length; i++)
            summation += this[i];

        return summation
    }
    print("a[0]:" + a[0]);
    print("Owner:" + a.Owner);
    print("Sum:" + a.sum());

//code Array
/**
- Array can be used as ***Queue*** (FIFO)
- Array can be used as ***Stack*** (LIFO)
**/

	var a = [];

	a.unshift(1);
	a.unshift(2);
	a.unshift(3);
	print(a);

    while(a.length){

    	print(a.pop());
    }

//code JavaScript data structures summary so far...
/**
- Object
- Dictionary
- Array
- List (Array)
- Queue
- Stack
**/

//code Array
/**
- Functional programming with array
- C# LINQ, Lambda expression
- Only available by default in JavaScript 5 
- Previous version can use the library augment.js
**/
	var a = [ 1, 2, 3 ];

	for(var i=0; i < a.length; i++){

        print(a[i]);
    }

    a.forEach(function(value){

        print(value);
    });

//code Array
/**
- Functional programming with array - filtering
- With LINQ the method is called FindAll
**/
	var a           = [ 1, 2, 3 ];

    var filtered    = a.filter(function(value){

        // Never use == and != always use === and !==
        return value % 2 === 0; 
    });

    print(filtered);

//code Array
/**
- Functional programming with array - processing an array
- With LINQ the method is called Select
**/
	var a    = [ 1, 2, 3 ];

    var newA = a.map(function(value){

        if (value % 2 === 0) 
            return "even"; else return "odd" ;
    });

    print(newA);

//code Array + Extending a class
/**
- AKA Extension Method
**/
    if(typeof Array.prototype.add !== 'function'){

        Array.prototype.add = function(value){

            this.push(value);
        }
    }

	var a = [];

    a.add(1);

    print(a);

//code The tale of the [ ]
/**
- The End
**/
