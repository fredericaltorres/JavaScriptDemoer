//code Undestanding JavaScript 
/**
***Closure***

Frederic Torres 2011
**/

//code Closure - What is this?
/**
- It is time to have Closure with your JavaScript's hate
**/

//code Closure - What is this?
/**
- Closure means:

    - An inner function always has access to the variables and parameters of its outer function

    - Even after the outer function has returned. *This part we did not see yet*
**/

//code Closure - Sample Please
/**
- I borrowed this sample from Douglas Crockford

- Google Yahoo Theater for interresting videos
**/

//code Closure - Sample Please
/**
- This code is part of a web page
- What is wrong with this code?
**/
var names = ['zero', 'one' , 'two'  , 'three', 'four', 
             'five', 'six' , 'seven', 'eight', 'nine'];

var digitName = function (n) {

    return names[n];
}

print(digitName(0));

//code Closure - Sample Please
/**
- What is wrong with this code?
**/
var digitName = function (n) {
    var 
        names = ['zero', 'one' , 'two'  , 'three', 'four', 
                 'five', 'six' , 'seven', 'eight', 'nine'];

    return names[n];
}

print(digitName(0));

//code Closure - Sample Please
/**
- Here it is!
**/
var digitName = (function (n) {
    var 
        names = ['zero', 'one' , 'two'  , 'three', 'four', 
                 'five', 'six' , 'seven', 'eight', 'nine'];

    return function (n){

        return names[n];
    }
})();

print(digitName(0));


//code The End
/**
- You are now ready to enjoy JavaScript
**/
