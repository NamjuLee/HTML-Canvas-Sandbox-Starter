
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Type of Variables');
        // your code goes here
        

         /*
            C# Variables
            Variables are containers for storing data values.

            In C#, there are different types of variables (defined with different keywords), for example:

            int     - stores integers (whole numbers), without decimals, such as 123 or -123
            double  - stores floating point numbers, with decimals, such as 19.99 or -19.99
            char    - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
            string  - stores text, such as "Hello World". String values are surrounded by double quotes
            bool    - stores values with two states: true or false

            */
        /*
            int myInt = 0; //1 2 43 100

            float myFloat = 3.0f;

            double myDouble = 2.0;

            string myString = "3.0";


            Print(

            myInt.GetType().ToString()

            );
            Print(myFloat.GetType().ToString());
            Print(myDouble.GetType().ToString());
            Print(myString.GetType().ToString());
        */
        /*
        C# Data Types
        As explained in the variables chapter, a variable in C# must be a specified data type:

        */

        // let myInt = 5;               // Integer (whole number)
        // // let myDouble = 5.99D;  // Floating point number
        // let myBool = true;         // Boolean
        // // let myFloat = 3.0f;
        // let myLetter = 'D';         // Character
        // // let myText = "DDDD";     // String

        /*
        A data type specifies the size and type of variable values. It is important to use the correct data type
        for the corresponding variable; to avoid errors, to save time and memory, but it will also make your code more maintainable and readable.
        The most common data types are:

        Data Type	Size	Description
        int	    4 bytes	Stores whole numbers from -2,147,483,648 to 2,147,483,647
        long	  8 bytes	Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        float	  4 bytes	Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
        double	8 bytes	Stores fractional numbers. Sufficient for storing 15 decimal digits
        bool	  1 bit	Stores true or false values
        char	  2 bytes	Stores a single character/letter, surrounded by single quotes
        string	2 bytes per character

        */


        // int resultInt = myInt + 10;
        // // int resultInt = myInt + 10.3f;
        // Print(resultInt.ToString());


        // double resultDouble = myDouble * myFloat;
        // // float resultFloat = myDouble * myFloat;
        // Print(resultDouble.ToString());


        /*
        Constants
        However, you can add the const keyword if you don't want others (or yourself)
        to overwrite existing values (this will declare the variable as "constant",
        which means unchangeable and read-only):

        */

        // const int myNum2 = 15;
        // // myNum2 = 20; // error
        // Print(myNum2.ToString());
    }
}