
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Compare If/Else');
        // your code goes here
        
  /*
    C# If ... Else

      C# Conditions and If Statements
        C# supports the usual logical conditions from mathematics:

        Less than: a < b
        Less than or equal to: a <= b
        Greater than: a > b
        Greater than or equal to: a >= b
        Equal to a == b
        Not Equal to: a != b

        C# has the following conditional statements:
          Use   if        to specify a block of code to be executed, if a specified condition is true
          Use   else      to specify a block of code to be executed, if the same condition is false
          Use   else if   to specify a new condition to test, if the first condition is false
          Use   switch    to specify many alternative blocks of code to be executed

        if (condition)
        {
          // block of code to be executed if the condition is True
        }

    */


        if (20 > 18)
        {
          console.log('20 is greater than 18');
        } else {
    
        }
    
    
    
        let a = 20;
        let b = 18;
        if (a > b)
        {
          console.log('a is greater than b');
        }
    
    
        // The else Statement
        // Use the else statement to specify a block of code to be executed if the condition is False.
    
        // The else if Statement
        // Use the else if statement to specify a new condition if the first condition is False.
    
        let time = 20;
        if (time < 10)
        {
          console.log('Good morning.');
        }
        else if (time < 20)
        {
          console.log('Good day.');
        }
        else
        {
          console.log('Good evening.');
        }
    
    
        let theTime = 20;
        let result = (theTime < 18) ? 'Good day.' : 'Good evening.';
        console.log(result);
    
        

        let myAge = 29;
        let subject = 1;
    
        if (myAge < 20) {
    
          if (subject == 1) {
            console.log('Math');
          } else if(subject == 2){
            console.log('History');
          }
    
        }

    }
}