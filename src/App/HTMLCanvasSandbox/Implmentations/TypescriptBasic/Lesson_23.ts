
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Class Members');
        // your code goes here


    /*

    C# Class Members
      Fields and methods inside classes are often referred to as "Class Members":


    */



    }
}


  // ........................................
  // // Create a Car class with three class members: two fields and one method.
  // class MyClass
  // {
  //   // Class members
  //   string color = "red";        // field
  //   int maxSpeed = 200;          // field

  //   public void fullThrottle()   // method
  //   {
  //     Console.WriteLine("The car is going as fast as it can!");
  //   }
  // }

  // /*
  //   Fields
  //       In the previous chapter, you learned that variables inside a class are called fields,
  //       and that you can access them by creating an object of the class, and by using the dot syntax (.).

  //       The following example will create an object of the Car class, with the name myObj.
  //       Then we print the value of the fields color and maxSpeed:
  // */

  // class Car1
  // {
  //   string color = "red";
  //   int maxSpeed = 200;

  //   static void Main(string[] args)
  //   {
  //     Car1 myObj = new Car1();
  //     Console.WriteLine(myObj.color);
  //     Console.WriteLine(myObj.maxSpeed);
  //   }
  // }

  // // .............................................
  // // You can also leave the fields blank, and modify them when creating the object:

  // class Car2
  // {
  //   string color;
  //   int maxSpeed;

  //   static void Main(string[] args)
  //   {
  //     Car2 myObj = new Car2();
  //     myObj.color = "red";
  //     myObj.maxSpeed = 200;
  //     Console.WriteLine(myObj.color);
  //     Console.WriteLine(myObj.maxSpeed);
  //   }
  // }


  // // This is especially useful when creating multiple objects of one class:
  // class Car3
  // {
  //   string model;
  //   string color;
  //   int year;

  //   static void Main(string[] args)
  //   {
  //     Car3 Ford = new Car3();
  //     Ford.model = "Mustang";
  //     Ford.color = "red";
  //     Ford.year = 1969;

  //     Car3 Opel = new Car3();
  //     Opel.model = "Astra";
  //     Opel.color = "white";
  //     Opel.year = 2005;

  //     Console.WriteLine(Ford.model);
  //     Console.WriteLine(Opel.model);
  //   }
  // }


  // /*
  // Object Methods
  //   You learned from the C# Methods chapter that methods are used to perform certain actions.

  //   Methods normally belongs to a class, and they define how an object of a class behaves.

  //   Just like with fields, you can access methods with the dot syntax.
  //   However, note that the method must be public. And remember that
  //   we use the name of the method followed by two parantheses () and a semicolon ; to call (execute) the method:


  // */


  // class Car4
  // {
  //   string color;                 // field
  //   int maxSpeed;                 // field
  //   int currentSpeend;
  //   public void fullThrottle()    // method
  //   {
  //     Console.WriteLine("The car is going as fast as it can!");
  //   }

  //   static void Main(string[] args)
  //   {
  //     Car4 myObj = new Car4();
  //     myObj.fullThrottle();  // Call the method
  //   }
  // }


  // /*
  //   Use Multiple Classes
  // */

  // class TheCar
  // {
  //   public string model;
  //   public string color;
  //   public int year;
  //   public void fullThrottle()
  //   {
  //     Console.WriteLine("The car is going as fast as it can!");
  //   }
  // }

  // class Program
  // {
  //   static void Main(string[] args)
  //   {
  //     TheCar Ford = new TheCar();
  //     Ford.model = "Mustang";
  //     Ford.color = "red";
  //     Ford.year = 1969;

  //     TheCar Opel = new TheCar();
  //     Opel.model = "Astra";
  //     Opel.color = "white";
  //     Opel.year = 2005;

  //     Console.WriteLine(Ford.model);
  //     Console.WriteLine(Opel.model);
  //   }
  // }
