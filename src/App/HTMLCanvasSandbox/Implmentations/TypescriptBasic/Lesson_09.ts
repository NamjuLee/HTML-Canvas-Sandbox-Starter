
export class Lesson {
    constructor() {
        console.log('Lesson ======================== For loop');
        // your code goes here
        

    /*

    C# For Loop
    When you know exactly how many times you want to loop through a block of code,
    use the for loop instead of a while loop:

    for (statement 1; statement 2; statement 3)
    {
      // code block to be executed
    }


    Statement 1 is executed (one time) before the execution of the code block.

    Statement 2 defines the condition for executing the code block.

    Statement 3 is executed (every time) after the code block has been executed.

    The example below will print the numbers 0 to 4:

    for (int i = 0; i < 5; i++)
    {
      Console.WriteLine(i);
    }


    */



    /*

    Statement 1 sets a variable before the loop starts (int i = 0).

    Statement 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.

    Statement 3 increases a value (i++) each time the code block in the loop has been executed.

    */


    for (let i = 0; i <= 10; i = i + 2)
    {
      console.log(i);
    }





    /*
    The foreach Loop
    There is also a foreach loop, which is used exclusively to loop through elements in an array:

    foreach (type variableName in arrayName)
    {
      // code block to be executed
    }
    */

    console.log("    ");

    let myString = "nj";
    console.log(myString);

    let cars = ["Volvo", "BMW", "Ford", "Mazda", "KIA"];
    // int[] cars = {10, 20, 4, 21 ,14, 7};

    for (let i in cars) {
      console.log(i);
    }

    for (let i = 0; i < cars.length; i++) {
      console.log(i + " : " + cars[i]);
    }



    let a = 10;
    let b = 9;
    for (let i = 2; i < a; ++i ){

      for (let j = 0; j <= b; j += 2 ){

        if (j != 0) {
          let result = i * j;
          console.log(i + " X " + j + " = " + result);
        }
      }


    }
        

    }
}