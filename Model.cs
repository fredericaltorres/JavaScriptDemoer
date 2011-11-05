using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace model {

    class Object {
        public string toString(){
            return null;
        }
    }
    class Array:Object {
        public int length;
        public void push(){}
        public void pop(){}

       
    }
    class arguments:Object {
        public int length;
    }
    class number {}
    class String {}
    class boolean {}
    class Date:Object {
        public int getDate()	{return 1;}
        public int getDay()	{return 1;}
        public int getFullYear(){return 1;}
    }
    class RegExp:Object {
        public bool test(string text){ return false;}
    }

    class Person:Object {

        public string LastName;
        public string FirstName;
        public string BirthDate;

        public object work(){
            return null;
        }
    }
    class Employee:Person {

        public string LastName;
        public string FirstName;
        public string BirthDate;
        public string Company;

        
        
    }
}

