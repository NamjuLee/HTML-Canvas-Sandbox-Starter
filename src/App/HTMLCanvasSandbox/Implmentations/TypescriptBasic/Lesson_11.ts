
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Array / List');
        // your code goes here
        

          /*

    C# Arrays
        Create an Array
        Arrays are used to store multiple values in a single variable,
        instead of declaring separate variables for each value.

        To declare an array, define the variable type with square brackets:


    */


    // int[] myNum;

    let myNum =[10, 20, 30, 40];
      console.log(myNum);


    let cars = ["Volvo", "BMW", "Ford", "KIA"];


    // Access the Elements of an Array
    //    You access an array element by referring to the index number.
    //    This statement accesses the value of the first element in cars:


    cars[0] = "Tesla";

    console.log(cars[0]);



    // Array Length
    // To find out how many elements an array has, use the Length property:


    let cars2 = ["Volvo", "BMW", "Ford", "KIA"];
    console.log(cars2.length);
    // Outputs 4


    // Loop Through an Array
    // You can loop through the array elements with the for loop,
    //  and use the Length property to specify how many times the loop should run.
    // The following example outputs all elements in the cars array:


    for (let i = 0; i < cars2.length; i++) {
      console.log(cars2[i]);
    }


    // The foreach Loop
    // There is also a foreach loop,
    // which is used exclusively to loop through elements in an array:
    /*

    foreach (type variableName in arrayName)
    {
    // code block to be executed
    }
    */


    let cars3 = ["Volvo", "BMW", "Ford", "KIA"];
    for (let i in cars3)
    {
      console.log(i);
    }

    let heights = [ 160, 190, 170, 185];
    for (let i in heights)
    {
      console.log(i);
    }


    // Sort Arrays
    // There are many array methods available, for example Sort(),
    // which sorts an array alphabetically or in an ascending order:


    // Array.Sort(cars);
    // foreach (string i in cars)
    // {
    //   console.log(i);
    // }


    // Array.Sort(heights);
    // foreach (int i in heights)
    // {
    //   console.log(i.ToString());
    // }




    /*

    C# Other Ways to Create an Array
          If you are familiar with C#, you might have seen arrays created with the new keyword,
          and perhaps you have seen arrays with a specified size as well.
          In C#, there are different ways to create an array:


    */


    // // Create an array of four elements, and add values later
    // let theCars1 = new string[4];

    // // Create an array of four elements and add values right away
    // let theCars2 = new string[4] {"Volvo", "BMW", "Ford", "KIA"};

    // // Create an array of four elements without specifying the size
    // string[] theCars3 = new string[] {"Volvo", "BMW", "Ford", "KIA"};

    // // Create an array of four elements, omitting the new keyword, and without specifying the size
    // string[] theCars4 = {"Volvo", "BMW", "Ford", "KIA"};


    // string[] theCars5 = new string[4];
    // theCars5[0] = "Volvo";
    // theCars5[1] = "BMW";
    // theCars5[2] = "Ford";
    // theCars5[3] = "KIA";




    //  // https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-5.0

    // // c# List
    // // Create a List

    // List<string> cars0;


    // List<string> cars1 = new List<string>(){"Volvo", "BMW", "Ford", "KIA"};


    // List<string> cars2 = new List<string>();
    // cars2.Add("Volvo");
    // cars2.Add("BMW");
    // cars2.Add("Ford");
    // cars2.Add("KIA");


    // console.log(cars2[0]);


    // // Length
    // console.log(cars2.Count.ToString()); // 4

    // // Loop Through an Array
    // for (int i = 0; i < cars2.Count; i++)
    // {
    //   console.log(cars2[i]);
    // }

    // // The foreach Loop
    // foreach (string i in cars2)
    // {
    //   console.log(i);
    // }


    // // Remove
    // console.log("................Remove  ");
    // cars2.Remove("BMW");
    // foreach (string i in cars2) console.log(i);


    // // RemoveAt
    // console.log("................RemoveAt ");
    // cars2.RemoveAt(0);
    // foreach (string i in cars2) console.log(i);


    }
}