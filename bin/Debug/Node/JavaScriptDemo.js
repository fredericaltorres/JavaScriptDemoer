function print(s){
    console.log(s);
}

function Person(lastName) {

    this.LastName = lastName;
}
function Employee(lastName, company) {
    this.LastName = lastName;   
    this.Company = company;
}
Employee.prototype = new Person(); // Inheritance

var e1 = new Employee("Descartes", "Dualism");
var e2 = new Employee("Pascal"   , "Jansenism");
print(e1.LastName); print(e2.LastName);
