
export class Lesson {
    constructor() {
        console.log('Lesson ======================== string');
        // your code goes here
        
  // /*
  //     C# Strings
  //     Strings are used for storing text.

  //     A string variable contains a collection of characters surrounded by double quotes:

  //   */

  //     string greeting = "Hello";


  //     /*
  //       String Length
  //         A string in C# is actually an object, which contain properties and methods that can
  //         perform certain operations on strings.
  //         For example, the length of a string can be found with the Length property:
  //     */
  
  //     string txt1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //     Print("The length of the txt string is: " + txt1.Length);
  
  
  //     /*
  //       Other Methods
  //         There are many string methods available,
  //         for example ToUpper() and ToLower(), which returns a copy of the string converted to uppercase or lowercase:
  //     */
  
  //     string txt2 = "Hello World";
  //     Print(txt2.ToUpper());   // Outputs "HELLO WORLD"
  //     Print(txt2.ToLower());   // Outputs "hello world"
  
  
  //     /*
  //     String Concatenation
  //     The + operator can be used between strings to combine them. This is called concatenation:
  //     */
  
  //     string firstName1 = "Namju ";
  //     string lastName1 = "Lee";
  //     string name1 = firstName1 + lastName1;
  //     Print(name1);
  
  //     // You can also use the string.Concat() method to concatenate two strings:
  //     string firstName2 = "Namju ";
  //     string lastName2 = "Lee";
  //     string name2 = string.Concat(firstName2, lastName2);
  //     Print(name2);
  
  
  
  
  //     /*
  //       Access Strings
  //           You can access the characters in a string by referring to its index number
  //           inside square brackets [].
  
  //           This example prints the first character in myString:
  
  //     */
  
  //     string myString1 = "Hello";
  //     Print(myString1[0].ToString());  // Outputs "H"
  //     Print(myString1[1].ToString());  // Outputs "e"
  
  
  //     // You can also find the index position of a specific character in a string,
  //     // by using the IndexOf() method:
  
  //     string myString2 = "Hello";
  //     Print(myString2.IndexOf("e").ToString());  // Outputs "1"
  
  
  
  //     // Another useful method is Substring(), which extracts the characters from a string,
  //     // starting from the specified character position/index, and returns a new string.
  //     // This method is often used together with IndexOf() to get the specific character position:
  
  //     // Full name
  //     string name = "Namju Lee";
  
  //     // Location of the letter L
  //     int charPos = name.IndexOf("L");
  
  //     // Get last name
  //     string lastName = name.Substring(charPos);
  
  //     // Print the result
  //     Print(lastName);
  
  
  //     /*
  //     int x = 10;
  //     int y = 20;
  //     int z = x + y;  // z will be 30 (an integer/number)
  //     */
  
  //     string xVal = "10";
  //     string yVal = "20";
  //     string zVal = xVal + yVal;  // z will be 1020 (a string)
  //     Print(zVal);
        

    }
}