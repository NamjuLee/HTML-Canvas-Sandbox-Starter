
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Switch Statements');
        // your code goes here
        
  /*

    The switch expression is evaluated once
    The value of the expression is compared with the values of each case
    If there is a match, the associated block of code is executed
    The break and default keywords will be described later in this chapter

    switch(expression)
    {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
        break;
    }

    */


    let day = 3;
    switch (day)
    {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Looking forward to the Weekend.");
        break;
    }



        

    }
}