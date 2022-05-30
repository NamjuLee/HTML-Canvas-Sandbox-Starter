import { Lesson } from './Lesson_01';

// https://www.w3spoint.com/typescript-tutorial

// Computation / Type / Variables 1, 2, 3
// Scope and Comment 4 - 5
// Conditions and Statements
// Loop
// Data Structures
// Methods 15 -
// Classes 19
// OOP 24

export class TypescriptBasic {
    constructor(){
        // this.init();

        new Lesson();
    }
    public init() {
        return  import('./Lesson_01').then(({ Lesson }) => {
            new Lesson();
        }).catch((err) => { console.log('Stop loading Lesson.'); console.log(err); });
    }
}