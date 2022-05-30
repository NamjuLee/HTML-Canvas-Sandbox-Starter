
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Properties (Get and Set)');
        // your code goes here


    /*

    C# Properties (Get and Set)
        Properties and Encapsulation
        Before we start to explain properties, you should have a basic understanding of "Encapsulation".

        The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

        declare fields/variables as private
        provide public get and set methods, through properties, to access and update the value of a private field


    Properties
        You learned from the previous chapter that private variables can only be accessed within the same class
        (an outside class has no access to it). However, sometimes we need to access them - and it can be done with properties.

        A property is like a combination of a variable and a method, and it has two methods: a get and a set method:

    */



    }
}



  /*
  Example explained
  The Name property is associated with the name field. It is a good practice to use the same name for both the property
  and the private field, but with an uppercase first letter.

  The get method returns the value of the variable name.

  The set method assigns a value to the name variable. The value keyword represents the value we assign to the property.

  If you don't fully understand it, take a look at the example below.

  Now we can use the Name property to access and update the private field of the Person class:
  */



  // public class Person1
  // {
  //   private string name; // field

  //   public string Name   // property
  //   {
  //     get { return name; }
  //     set { name = value; }
  //   }
  // }

  // class Program1
  // {
  //   static void Main(string[] args)
  //   {
  //     Person1 myObj = new Person1();
  //     myObj.Name = "Liam";

  //     // string yourName = myObj.Name;

  //     Console.WriteLine(myObj.Name);
  //   }
  // }



  /*
     Automatic Properties (Short Hand)
        C# also provides a way to use short-hand / automatic properties,
        where you do not have to define the field for the property,
        and you only have to write get; and set; inside the property.

        The following example will produce the same result as the example above.
        The only difference is that there is less code:
 */

  // class Person2
  // {
  //   public string Name  // property
  //   { get; set; }
  // }

  // class Program2
  // {
  //   static void Main(string[] args)
  //   {
  //     Person2 myObj = new Person2();
  //     myObj.Name = "Liam";
  //     Console.WriteLine(myObj.Name);
  //   }
  // }


  /*

    Why Encapsulation?
        * Better control of class members (reduce the possibility of yourself
          (or others) to mess up the code)

        * Fields can be made read-only (if you only use the get method),
          or write-only (if you only use the set method)

        * Flexible: the programmer can change one part of the code without affecting other parts

        * Increased security of data

   */
