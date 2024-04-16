/* TYPES */

/** Any **/
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level; //any

// function render(document){
//     console.log(document);
// }

/** Array **/
// initialize number array need to be explicitly set to array type
let numbers: number[] = [];
// useful for code completion
numbers.forEach((n) => n.toExponential);

/** Tuples **/
/*
- fixed length array where each elements has a particular type
- often used when working with a pair of values, ie: user has id and name pair
*/

let user: [number, string] = [1, "Mosh"];
user.push(1); // gap in TS

/** Enums **/
/*
- list of related constants
*/
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

/** Functions **/
/*
- all parameters as well as the return type should be properly annotated
- question mark makes param optional but default assignment is better
*/
function calculateTax(income: number, taxYear = 2022): number {
  //specifies return type
  if (taxYear < 2022) return income * 1.2;
  // Function lacks ending return statement and return type does not include 'undefined'.
  // This means that undefined is not included in the return type 'number'

  // this line resolves not all code paths return a value
  return income * 1.3;
}
// need exact number of arguments as params
calculateTax(10_000);

/** Objects **/
/*
- TS will imply the shape of an object by what is preexisting in that object
- not a good idea to use ? in case attribute doesn't exist, make sure it conceptually makes sense, ie: all employees have a name
*/
// let employee: {
//   readonly id: number; // readonly means is cannot be modified
//   name: string;
//   retire: (date: Date) => void; //we don't want to return anything so we return void
// } = {
//   id: 1,
//   name: "Michele",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

/* type aliases */
/*
 - the above is very verbose and not reusable or dry
*/

type Employee = {
  readonly id: number; // readonly means is cannot be modified
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Michele",
  retire: (date: Date) => {
    console.log(date);
  },
};
