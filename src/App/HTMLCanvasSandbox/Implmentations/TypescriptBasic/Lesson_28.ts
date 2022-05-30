
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Polymorphism and Overriding Methods');
        // your code goes here


      /*

    C# Polymorphism
      Polymorphism and Overriding Methods
        Polymorphism means "many forms", and it occurs when we have many classes
        that are related to each other by inheritance.

        Like we specified in the previous chapter; Inheritance lets us inherit fields and
        methods from another class. Polymorphism uses those methods to perform different tasks.
        This allows us to perform a single action in different ways.

      For example, think of a base class called Animal that has a method called animalSound().
          Derived classes of Animals could be Pigs, Cats, Dogs, Birds -
          And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):

    */

          // int a = 3;
          // object b = 3 + a;
      
      
          // Animal myAnimal = new Animal();   // Create a Animal object
          // Animal myPig = new Pig();         // Create a Pig object
          // Animal myDog = new Dog();         // Create a Dog object
      
          // Print(myAnimal.animalSound());
          // Print(myPig.animalSound());
          // Print(myDog.animalSound());


    }
}


  // // /*
  // class Animal  // Base class (parent)
  // {
  //   public string animalSound()
  //   {
  //     return ("The animal makes a sound");
  //   }
  // }

  // class Pig : Animal  // Derived class (child)
  // {
  //   public string animalSound()
  //   {
  //     return("The pig says: wee wee");
  //   }
  // }

  // class Dog : Animal  // Derived class (child)
  // {
  //   public string animalSound()
  //   {
  //     return("The dog says: bow wow");
  //   }
  // }
  // */

  /*
  class Animal  // Base class (parent)
  {
  public virtual string animalSound()
  {
  return ("The animal makes a sound");
  }
  }

  class Pig : Animal  // Derived class (child)
  {
  public override string animalSound()
  {
  return("The pig says: wee wee");
  }
  }

  class Dog : Animal  // Derived class (child)
  {
  public override string animalSound()
  {
  return("The dog says: bow wow");
  }
  }
  */

  // Why And When To Use "Inheritance" and "Polymorphism"?
  //    - It is useful for code reusability: reuse fields and methods
  //      of an existing class when you create a new class.
