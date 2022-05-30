
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Method Parameters');
        // your code goes here
        
   //  The following example has a method that takes a string called fname as parameter. When the method is called,
  //  we pass along a first name, which is used inside the method to print the full name:
  // static void MyMethod1(string fname)
  // {
  //   // Print(fname + " Refsnes");
  // }

  // static void Main(string[] args)
  // {
  //   MyMethod1("Liam");
  //   MyMethod1("Jenny");
  //   MyMethod1("Anja");
  // }
  // // Liam Refsnes
  // // Jenny Refsnes
  // // Anja Refsnes



  // // Default Parameter Value
  // // You can also use a default parameter value, by using the equals sign (=). If we call the method without an argument,
  // // it uses the default value ("Norway"):
  // static void MyMethod2(string country = "Norway")
  // {
  //   // Print(country);
  // }

  // static void Main2(string[] args)
  // {
  //   MyMethod2("Sweden");
  //   MyMethod2("India");
  //   MyMethod2();
  //   MyMethod2("USA");
  // }
  // // Sweden
  // // India
  // // Norway
  // // USA



  // /*
  // Return Values
  // The void keyword, used in the examples above, indicates that the method should not return a value.
  // If you want the method to return a value, you can use a primitive data type (such as int or double)
  // instead of void, and use the return keyword inside the method:

  // */

  // static int MyMethod3(int x)
  // {
  //   return 5 + x;
  // }

  // static void Main3(string[] args)
  // {
  //   // Print(MyMethod3(3));
  // }
  // // Outputs 8 (5 + 3)



  // // This example returns the sum of a method's two parameters:
  // static int MyMethod4(int x, int y = 10)
  // {
  //   return x + y;
  // }

  // static void Main4(string[] args)
  // {
  //   // Print(MyMethod4(5, 3));
  // }
  // // Outputs 8 (5 + 3)


  // /*
  // Named Arguments
  // It is also possible to send arguments with the key: value syntax.

  // That way, the order of the arguments does not matter:
  // */
  // static void MyMethod7(string child1, string child2, string child3)
  // {
  //   // Print("The youngest child is: " + child3);
  // }

  // static void Main7(string[] args)
  // {
  //   MyMethod7(child3: "John", child1: "Liam", child2: "Liam");
  // }

  // // The youngest child is: John

  // // Named arguments are especially useful when you have multiple parameters
  // // with default values, and you only want to specify one of them when you call it:
  // static string MyMethod8(string child1 = "Liam", string child2 = "Jenny", string child3 = "John")
  // {
  //   return child3;
  // }

  // static void Main8(string[] args)
  // {
  //   string result = MyMethod8("child3");
  //   // Print(result);
  // }
  // // John



    }
}