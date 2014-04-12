public class Person {
 
    public string LastName  { get; set; }
     
    public Person(string lastName) {
        this.LastName  = lastName;
    }
    public void Run(){
        Console.WriteLine(this.LastName + " is running...");
    }
}
