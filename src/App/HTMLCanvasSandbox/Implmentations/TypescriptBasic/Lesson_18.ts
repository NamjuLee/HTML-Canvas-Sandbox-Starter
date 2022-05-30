
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Method Overloading');
        // your code goes here
   // Consider the following example, which have two methods that add numbers of different type:

  //  static int PlusMethodInt(int x, int y)
  //  {
  //    return x + y;
  //  }
 
  //  static double PlusMethodDouble(double x, double y)
  //  {
  //    return x + y;
  //  }
 
  //  static void Main1(string[] args)
  //  {
  //    int myNum1 = PlusMethodInt(8, 5);
  //    double myNum2 = PlusMethodDouble(4.3, 6.26);
  //    Console.WriteLine("Int: " + myNum1);
  //    Console.WriteLine("Double: " + myNum2);
  //  }
 
  //  // ...................................................
 
  //  // Instead of defining two methods that should do the same thing, it is better to overload one.
  //  // In the example below, we overload the PlusMethod method to work for both int and double:
 
  //  static int PlusMethod(int x, int y)
  //  {
  //    return x + y;
  //  }
 
  //  static double PlusMethod(double x, double y)
  //  {
  //    return x + y;
  //  }
 
  //  static void Main2(string[] args)
  //  {
  //    int myNum1 = PlusMethod(8, 5);
  //    double myNum2 = PlusMethod(4.3, 6.26);
  //    Console.WriteLine("Int: " + myNum1);
  //    Console.WriteLine("Double: " + myNum2);
  //  }
 
 

    }
}