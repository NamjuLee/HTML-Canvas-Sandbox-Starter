
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Access Modifiers');
        // your code goes here


    /*

    C# Access Modifiers
        By now, you are quite familiar with the public keyword that appears in many of our examples:


      The public keyword is an access modifier, which is used to set the access level/visibility for classes,
      fields, methods and properties.

      C# has the following access modifiers:

      Modifier	Description
      public	    The code is accessible for all classes
      private	    The code is only accessible within the same class
      protected	  The code is accessible within the same class, or in a class that is inherited from that class.
                  You will learn more about inheritance in a later chapter
      internal	  The code is only accessible within its own assembly, but not from another assembly.
                  You will learn more about this in a later chapter

      There's also two combinations: protected internal and private protected.

    */


    /*

    Why Access Modifiers?
      To control the visibility of class members
      (the security level of each individual class and class member).

      To achieve "Encapsulation" - which is the process of making sure that
      "sensitive" data is hidden from users. This is done by declaring fields as private.
      You will learn more about this in the next chapter.

    */



      // Car1 myObj = new Car1();
      // myObj.UpdateModel("KIA");
      // Print(myObj.GetModel());




    }
}


  // // Private Modifier
  // // If you declare a field with a private access modifier,
  // // it can only be accessed within the same class:

  // public class Car1
  // {
  //   private string model = "Mustang";

  //   public void UpdateModel(string model) {
  //     this.model = model;
  //   }
  //   public string GetModel() {
  //     return this.model;
  //   }

  //   static void Main(string[] args)
  //   {
  //     Car1 myObj = new Car1();
  //     // Console.WriteLine(myObj.model); // error
  //   }
  // }

  // // If you try to access it outside the class, an error will occur:
  // class Car2
  // {
  //   private string model = "Mustang";
  // }

  // class Program1
  // {
  //   static void Main(string[] args)
  //   {
  //     Car2 myObj = new Car2();
  //     // Console.WriteLine(myObj.model); error
  //   }
  // }


  // // Public Modifier
  // // If you declare a field with a public access modifier,
  // // it is accessible for all classes:

  // public class Car3
  // {
  //   public string model = "Mustang";
  // }

  // class Program2
  // {
  //   static void Main(string[] args)
  //   {
  //     Car3 myObj = new Car3();
  //     Console.WriteLine(myObj.model);
  //   }
  // }


  // // Note: By default, all members of a class are private if you don't specify an access modifier:
  // class Car4
  // {
  //   string model;  // private
  //   string year;   // private
  // }



