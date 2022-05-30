
export class Lesson {
    constructor() {
        console.log('Lesson ======================== While Loop');
        // your code goes here
        

        
    /*

      Loops
      Loops can execute a block of code as long as a specified condition is reached.

      Loops are handy because they save time, reduce errors, and they make code more readable.


      The while loop loops through a block of code as long as a specified condition is True:
        while (condition)
        {
          // code block to be executed
        }



    */




    let i = 0;

    while (i < 5)
    {
      console.log(i);
      i++;
    }


    console.log(" ");

    let j = 5;
    while (true)
    {
      console.log(j);

      j--;

      if (j < 0) break;

    }


    /*
    for(int i = 0 ; i < 10000000000; ++i) {

    }
    */

    }
}