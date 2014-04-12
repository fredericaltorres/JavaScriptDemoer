function print(s){
    console.log(s);
}

function TheClass(){

    this.run = function() {

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
