
export class Lesson {
    constructor() {
        console.log('Lesson ======================== Math Function');
        // your code goes here
        
    // https://docs.microsoft.com/en-us/dotnet/api/system.math?view=net-5.0
    /*
    The C# Math class has many methods that allows you to perform mathematical tasks on numbers.
    */

    // Math.Max(x, y)
    // The Math.Max(x, y) method can be used to find the highest value of x and y:
    console.log(Math.max(5, 10) + " by Math.Max");

    // Math.Min(x, y)
    // The Math.Min(x, y) method can be used to find the lowest value of of x and y:
    console.log(Math.min(5, 10) + " by Math.Min");

    // Math.Sqrt(x)
    // The Math.Sqrt(x) method returns the square root of x:
    console.log(Math.sqrt(64) + " by Math.Sqrt");

    // Math.Abs(x)
    // The Math.Abs(x) method returns the absolute (positive) value of x:
    console.log(Math.abs(-4.7) + " by Math.Abs");

    // Math.Round()
    // Math.Round() rounds a number to the nearest whole number:
    console.log(Math.round(9.99) + " by Math.Round");

    }
}