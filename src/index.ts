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
