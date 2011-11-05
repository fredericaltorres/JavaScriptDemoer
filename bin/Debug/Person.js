function Person(lastName, firstName, birthDate){

    this.LastName  = lastName;
    this.FirstName = firstName;
    this.BirthDate = birthDate;

    //console.log("this.BirthDate="+this.BirthDate);

	this.run = function(){ 

        print(this.LastName + " is running...");
    }
}