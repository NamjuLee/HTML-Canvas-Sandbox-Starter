
export class Lesson {
    constructor() {
        console.log('Lesson ========================');
        // your code goes here
        

            // https://www.geeksforgeeks.org/scope-of-variables-in-c-sharp/


        let conditionFirst = true;
        let i;


        if (conditionFirst) {
            let conditionSecond = true;

        if (conditionSecond) {

            for(i = 0 ; i < 10 ; ++i) {
            this.Add(i, i);
            console.log(i);

            }

        }
        }

    }

    globalValueInthisClass = 0;


    public Add(a: number, b: number): number {
      let i = a + b;
      return i;
    }
  
}