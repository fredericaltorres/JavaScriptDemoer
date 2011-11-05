public class Person{

    public string   LastName  { get; set; }
    public string   FirstName { get; set; }
    public DateTime BirthDate { get; set; }

    public Person(){

    }    
    public Person(string lastName, string firstName): this(lastName, firstName, new DateTime(1900,1,1)){

    }
    public Person(string lastName, string firstName, DateTime birthDate){

        this.LastName  = lastName;
        this.FirstName = firstName;
        this.BirthDate = birthDate;
    }
    public virtual void Run(){
    
        Console.WriteLine(this.LastName + " is running...");
    }
}