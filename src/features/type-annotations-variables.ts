//**** primitives

// I am an annotation to decleare apple of type number
let apple: number = 5;
// this will fail
//apple = 'hello';

// I can use every primitive type as annotation or an object type
let notMuch: null = null;
let isBinary: boolean = true;
let notExixting: undefined = undefined;
let now: Date = new Date();

//**** arrays

// colors is an array of strings
let colors: string[] = [];
// this will fail colors = [10];

let nums: number[] = [1, 2, 3];

class Tone {
  weight: string;
}

let longTone: Tone[] = [new Tone()];

//**** object literals
// assign a definitions first for the object literal that I am gonna provide the implementation right after implementation
const pointer: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//**** functions
// this part is a description of the function that squareFn will reference later, it's not gonna be execute
// it's serving the typescript compiler
// this is the actual function implementation (i: number) => { return i * i;};
const squareFn: (i: number) => number = (i: number) => {
  return i * i;
};

/* if I write, and I hoer the mouse I still see the correct definition of the type.
this is because the type has been inferenced. ebery time that I decleare a variable
and assign a value on the same line, typescript will be able to inferene the type for me.
This is not gonna work if I initialize the variable then assign a value on a different line.
*/
let anotherApple = 5; // inferenced
let lemon; // lemon will be any
lemon = 'lemon';

/* WHEN TO USE TYPE ANNOTATIONS?
  1. every time we call a function that returns type any
  2. every time we decleare a variable but postpone initialization;
  3. every time we may expect different types for a variable as with number | boolean
*/

/* any type: typescript has no idea what kin ov value will be returned from JSON.parse() 
since it depends on the input string. The any type means that typescript doesn't know 
the type of coordinates. which is bad because the objective is exactly to predict the types and avoid errors
*/
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json); // type will be any

// now typescript knows what type of properties coord should contain
const coord: { x: number; y: number } = JSON.parse(json);

// mixed types
const someNumbers = [-10, -3, 5, 7];
const positiveNumber: (number | boolean)[] = someNumbers.map((n) => {
  return n > 0 ? n : false;
});
