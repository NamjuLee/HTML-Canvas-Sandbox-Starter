
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Abstraction');
        // your code goes here

   /*

    C# Abstract Classes and Methods
        Data abstraction is the process of hiding certain details
        and showing only essential information to the user.

        Abstraction can be achieved with either abstract classes or interfaces
        (which you will learn more about in the next chapter).

        The abstract keyword is used for classes and methods:

        Abstract class: is a restricted class that cannot be used to create objects
        (to access it, it must be inherited from another class).

        Abstract method: can only be used in an abstract class, and it does not have a body.
        The body is provided by the derived class (inherited from).
        An abstract class can have both abstract and regular methods:

    */


        // Pig myPig = new Pig();        // Create a Pig object
        // Print(myPig.animalSound());   // Call the abstract method
        // Print(myPig.sleep());         // Call the regular method


    }
}



  // // Abstract class
  // abstract class Animal
  // {
  //   // Abstract method (does not have a body)
  //   public abstract string animalSound();
  //   // Regular method
  //   public string sleep()
  //   {
  //     return "Zzz";
  //   }
  // }

  // // Derived class (inherit from Animal)
  // class Pig : Animal
  // {
  //   public override string animalSound()
  //   {
  //     // The body of animalSound() is provided here
  //     return ("The pig says: wee wee");
  //   }
  // }

  // // https://en.wikipedia.org/wiki/Object-oriented_programming
  // // https://en.wikipedia.org/wiki/Software_design_pattern
  // // https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns

  // // https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/object-oriented-programming

  // // https://nj-namju.medium.com/4-computational-geometry-geometry-class-f15d342469d4
  // // https://nj-namju.medium.com/5-pipeline-for-data-and-geometry-visualization-b2c9df7c21c7