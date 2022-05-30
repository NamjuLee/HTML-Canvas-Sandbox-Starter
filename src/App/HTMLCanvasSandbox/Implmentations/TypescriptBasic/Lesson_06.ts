
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Comparison / Logical Operators ');
        // your code goes here
        

        
      /*
      C# Comparison Operators
          Comparison operators are used to compare two values:

              ==	  Equal to	                  x == y
              !=	  Not equal	                  x != y
              >	    Greater than	              x > y
              <	    Less than 	                x < y
              >=	  Greater than or equal to	  x >= y
              <=	  Less than or equal to	      x <= y
      */

      let myX = 3;
      if (myX == 3) {

        console.log("myX == 3 " + "TRUE");

      } else {

        console.log("False");

      }


      /*
      C# Logical Operators
          Comparison operators are used to compare two values:

              && 	Logical and	Returns true if both statements are true	                x < 5 &&  x < 10
              || 	Logical or	Returns true if one of the statements is true	            x < 5 || x < 4
              !	  Logical not	Reverse the result, returns false if the result is true	  !(x < 5 && x < 10)
      */



      let myVal = 6;
      if(myVal < 5 && myVal < 10) {
        console.log("myVal < 5 && myVal < 10 " + "TRUE");
      } else {
        console.log("myVal < 5 && myVal < 10 " + "FALSE");
      }

      let yourVal = 2;
      if(yourVal < 5 || yourVal < 4) {
        console.log("yourVal < 5 || yourVal < 4 " + "TRUE");
      }

      let myTurn = true;
      myTurn = !myTurn;
      myTurn = !myTurn;
      myTurn = !myTurn;
      console.log("myTurn " + myTurn);

    }
}