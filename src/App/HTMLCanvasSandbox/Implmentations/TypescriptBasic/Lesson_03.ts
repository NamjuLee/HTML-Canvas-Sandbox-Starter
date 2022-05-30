
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Cast');
        // your code goes here
        
            
        /*
        C# Type Casting
        Type casting is when you assign a value of one data type to another type.

        In C#, there are two types of casting:

        Implicit Casting (automatically) - converting a smaller type to a larger type size
            char-> int -> long-> float-> double

        Explicit Casting(manually) - converting a larger type to a smaller size type
            double-> float-> long-> int -> char

        */



        // Implicit Casting
        //    Implicit casting is done automatically when passing a smaller size type
        //    to a larger size type:

        // // Example
        // int myInt = 9;
        // double myDouble = myInt;       // Automatic casting: int to double // 9.0

        // Print(myInt.ToString());      // Outputs 9
        // Print(myDouble.ToString());   // Outputs 9




        // // Explicit Casting
        // //    Explicit casting must be done manually by placing the type in parentheses
        // //    in front of the value:

        // // Example
        // double myDouble2 = 9.78D;
        // int myInt2 = (int) myDouble2;    // Manual casting: double to int

        // Print(myDouble2.ToString());   // Outputs 9.78
        // Print(myInt2.ToString());      // Outputs 9



        // // Type Conversion Methods
        // //    It is also possible to convert data types explicitly by using built-in methods,
        // //    such as
        // //    Convert.ToBoolean, Convert.ToDouble, Convert.ToString,
        // //    Convert.ToInt32(int) and Convert.ToInt64(long):

        // // Example
        // int myInt3 = 10;
        // double myDouble3 = 5.25;
        // bool myBool3 = false;

        // // using System;
        // Print(Convert.ToString(myInt3));    // convert int to string
        // Print(Convert.ToDouble(myInt3).ToString());    // convert int to double
        // Print(Convert.ToInt32(myDouble3).ToString());  // convert double to int
        // Print(Convert.ToString(myBool3).ToString());   // convert bool to string



        // string myNum = "9.9";
        // Print(myNum);
        // Print((Convert.ToDouble(myNum) * 2).ToString());


    }
}