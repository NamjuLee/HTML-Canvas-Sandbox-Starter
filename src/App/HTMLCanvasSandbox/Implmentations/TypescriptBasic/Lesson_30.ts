
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Interface');
        // your code goes here


    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface

    /*

    C# Interfaces
    Another way to achieve abstraction in C#, is with interfaces.

    An interface is a completely "abstract class",
    which can only contain abstract methods and properties (with empty bodies):



    It is considered good practice to start with the letter "I" at the beginning of an interface,
    as it makes it easier for yourself and others to remember that it is an interface and not a class.

    By default, members of an interface are abstract and public.

    Note: Interfaces can contain properties and methods, but not fields.

    */


    // Pig myPig = new Pig();          // Create a Pig object
    // Print(myPig.animalSound());

    // Print(MainClass.main());



    }
}



  // // Interface
  // interface IAnimal
  // {
  //   string animalSound(); // interface method (does not have a body)
  // }

  // // Pig "implements" the IAnimal interface
  // class Pig : IAnimal
  // {
  //   public string animalSound()
  //   {
  //     // The body of animalSound() is provided here
  //     return ("The pig says: wee wee");
  //   }
  // }

  // // .................................................................



  // interface IPoint {
  //   // Property signatures:
  //   int X {
  //     get;
  //     set;
  //   }

  //   int Y {
  //     get;
  //     set;
  //   }

  //   double Distance {
  //     get;
  //   }
  // }

  // class Point : IPoint {
  //   // Constructor:
  //   public Point(int x, int y) {
  //     X = x;
  //     Y = y;
  //   }

  //   // Property implementation:
  //   public int X { get; set; }

  //   public int Y { get; set; }

  //   // Property implementation
  //   public double Distance {
  //     get{
  //       return Math.Sqrt(X * X + Y * Y);
  //     }
  //   }
  // }

  // class MainClass
  // {
  //   static string PrintPoint(IPoint p)
  //   {
  //     return "x= " + p.X.ToString() + " , y= " + p.Y.ToString();
  //   }

  //   public static string main()
  //   {
  //     IPoint p = new Point(2, 3);
  //     return PrintPoint(p);
  //   }
  // }
